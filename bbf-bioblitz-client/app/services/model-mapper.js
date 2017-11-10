import Ember from 'ember';
import parseFieldMapping from 'bbf-bioblitz/utils/parse-field-mapping';

const { Promise } = Ember.RSVP;

export default Ember.Service.extend({
  store: Ember.inject.service(),

  mapFieldsToModel( csvRow ) {
      let store = this.get('store');

      function convertTypes( model, fieldName, fieldValue ) {
        let attr = Ember.get( model, "attributes" ).get(fieldName);
        if ( attr && attr.type === 'date' ) {
          return new Date( fieldValue );
        }
        return fieldValue;
      }

      function lookUpByProperty( modelName, fieldName, value ) {
      //  console.log(`looking up ${modelName}.${fieldName} == ${value}`);
        return store.query( modelName, {
            filter: {
              [fieldName]: value
            }
          } ).then( models => {
            if (models.get('length') == 0 )
              throw new Error('Unable to find model');
            return models.get('firstObject');
          });
      }

      function resolveField( obj, modelName, fieldName, fieldValue ) {

        console.log(`obj = ${obj} modelName = ${modelName} fieldName = ${fieldName} fieldValue = ${fieldValue}`);

        /* Takes the datastructure returned by expandModelChain(), iterates it
           looking for pre-existing objects and creating blank records if the
           object isn't found. */
        function lookupUpOrCreateRecords( expandedFieldChain, lookupValue ) {
          return expandedFieldChain.reduce(
              ( promise, { model, kind, field } ) =>
                  promise
                    .then( value => {
                        if (kind === 'value') {
                          // look up entity for this value
                          return lookUpByProperty( model.modelName, field, value )
                             .catch( () =>
                                store.createRecord( model.modelName,
                                  { [field]: value } ) );
                        } else {
                          // FIXME: What should be done here?
                          // currently we create a new record as a link.
                          // this doesn't look up existing links so will
                          // create dups.
                          return store.createRecord( model.modelName,
                             { [field]: value } );
                        }
                    }),  Promise.resolve(lookupValue) );
        }

        let expansion = parseFieldMapping(
          ( modelName ? store.modelFor(modelName) : null ),
          fieldName, store );

        // If we have a root object
        var kind, field;
        if ( obj ) {
          let tmp = expansion.pop();
          kind = tmp.kind;
          field = tmp.field;
        }
        return lookupUpOrCreateRecords( expansion, fieldValue )
          .then ( value => {
            if ( obj ) {
              if ( kind === 'hasMany' ) {
                obj.get(field).pushObject( value );
              } else {
                if ( modelName ) {
                  value = convertTypes( store.modelFor(modelName), field, value )
                }
                obj.set( field, value );
              }
              return obj;
            } else {
              return value;
            }
          });
      }

      let [firstColumn, ...csvKeys] = Object.keys( csvRow );

      return resolveField( null, null, firstColumn, csvRow[firstColumn] )
        .then( obj =>
          Promise.all(
            csvKeys.map( name =>
              resolveField( obj, obj.get('constructor.modelName'), name, csvRow[name] ) )
        ).then( () => obj ));
  }
});
