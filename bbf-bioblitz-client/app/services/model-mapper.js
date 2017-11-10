import Ember from 'ember';

const { Promise } = Ember.RSVP;

export default Ember.Service.extend({
  store: Ember.inject.service(),

  mapFieldsToModel( csvRow ) {
      let store = this.get('store');

      function parseColumnName( fieldName ) {
        let parts = fieldName.split(':');
        return parts.map( n => n.camelize() );
      }

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
            if (models.length == 0 )
              throw new Error('Unable to find model');
            return models.get('firstObject');
          });
      }

      function resolveField( obj, modelName, fieldName, fieldValue ) {

        let model = store.modelFor(modelName);

        /*
          Pass an array of field names and model e.g.
            rootModel = Surveyslot, fieldChain = [ 'participants', 'person', 'name' ]
          returns an array that looks like this:
            [
              { model: Person, kind: 'value', field: 'name'},
              { model: Participant, kind: 'hasOne', field: 'person' },
              { model: Surveyslot, kind:'hasMany', field: 'participants' }
            ]
        */
        function expandModelChain( rootModel, fieldChain ) {

          // base case
          if ( fieldChain.length === 1 )
            return [{ model: rootModel, kind: 'value', field: fieldChain[0]}];

          // construct n based on n-1
          let [ indirectField, ... restOfChain ] = fieldChain;
          let relationshipMeta =
            Ember.get( rootModel, 'relationshipsByName')
              .get( indirectField );

          if ( typeof relationshipMeta === 'undefined')
            throw new Error(`Unable to find relationship ${indirectField} in ${rootModel.modelName}`);

          let refModel =  store.modelFor( relationshipMeta.type );

          if ( typeof refModel === 'undefined')
            throw new Error(`Unable to find type for relationship ${indirectField} in ${rootModel.modelName}`);

          let expansion = expandModelChain( refModel, restOfChain );
          expansion.push( {model: rootModel, kind: relationshipMeta.kind,
            field: indirectField });

        /*  console.log("expansion is:");
          expansion.forEach( ({model,kind,field}) => console.log( `model = ${model.modelName} kind = ${kind} field = ${field}`) );*/
          return expansion;

        }

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
                          return lookUpByProperty( model.modelName, field,
                          ( typeof value === 'object' ? value.get('id') : value )
                          ).catch( () => store.createRecord( model.modelName,
                             { [field]: value } ) );
                        } else {
                          // FIXME: What should be done here?
                          // currently we create a new record as a link.
                          // this doesn't look up existing links so will
                          // create dups.
                          return store.createRecord( model.modelName,
                             { [field]: value } );

                        }
                    }
                    ),  Promise.resolve(
                          convertTypes( model, field, lookupValue ) ) );
        }

        let expansion = expandModelChain( model, parseColumnName( fieldName ) );
        let { kind, field } = expansion.pop();
        return lookupUpOrCreateRecords( expansion, fieldValue )
          .then ( value => {
            if ( kind === 'hasMany' ) {
              obj.get(field).pushObject( value );
            } else {
              obj.set( field, value );
            }
            return obj;
          });
      }

      // The first column name is special: if it has no colon character then
      // it refers to the name of the model and the values are the ids.
      //
      // If there is a colon then the values are stored in that proprty name.
      function createOrLookupRecord( modelName, fieldName, fieldValue ) {
        let props = {};
        if ( fieldName === 'id' ) {
            return store.findRecord( modelName, fieldValue )
              .catch( () => store.createRecord( modelName, props ));
        } else {
          if ( ! fieldName ) fieldName = 'name';
          props[fieldName] = fieldValue;
          return Promise.resolve( store.createRecord( modelName, props ) );
        }
      }

      let
          csvKeys = Object.keys( csvRow ),
          firstColumnName = csvKeys.shift(),
          firstColumnValue = csvRow[firstColumnName],
          firstColumn = parseColumnName( firstColumnName );

      let modelName = null, fieldName = null;
      if (firstColumn.length > 1) {
        modelName = firstColumn.slice(-2)[0];
        fieldName = firstColumn.slice(-1)[0];
      } else {
        modelName = firstColumn[0];
        fieldName = 'name';
      }

      if ( modelName == null )
        throw new Error("Must specify the object class in first column! ");

      return createOrLookupRecord( modelName, fieldName, firstColumnValue )
          .then( obj => Promise.all(
              csvKeys.map(
                  name => resolveField( obj, modelName, name, csvRow[name] )
              )).then( () => obj ));
  }
});
