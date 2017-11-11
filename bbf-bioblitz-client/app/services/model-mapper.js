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

      function checkSingleModel( models ) {
        if (models.get('length') == 0 )
          return null;
        if (models.get('length') > 1 )
          throw new Error('Ambiguous model');
        return models.get('firstObject');
      }

      function lookUpByProperty( modelName, fieldName, value ) {
        return store.query( modelName, { filter: { [fieldName]: value } } )
          .then(checkSingleModel);
      }

      function lookUpByProperties( modelName, filter ) {
        return store.query( modelName, { filter: filter } )
          .then(checkSingleModel);
      }

      function processMapping( expansionTail, name ) {
        let finalExpansion = expansionTail.pop();
        let expansion = {
            name: name,
            value: csvRow[name],
            finalExpansion: finalExpansion,
            expansionTail: expansionTail
        };
        if ( finalExpansion.useAsKey ) {
          keyExpansions.push( expansion );
        } else {
          expansions.push( expansion );
        }
      }

      function createNewRecordIfNull( [ rootObject, values ] ) {
        if ( rootObject === null ) {
          let props = {};
          values.forEach( val => props[val.field] = val.value );
          return store.createRecord( rootObject.constructor.modelName, props );
        } else {
          return rootObject;
        }
      }

      /* Takes the datastructure returned by expandModelChain(), iterates it
         looking for pre-existing objects and creating blank records if the
         object isn't found. */
      function reduceFieldChain( chain, lookupValue ) {
        return chain.reduce(
            ( promise, { model, kind, field } ) =>
                promise
                  .then( value => {
                      if (kind === 'value') {
                        // look up entity for this value
                        return lookUpByProperty( model.modelName, field, value )
                           .then( newValue => {
                              if ( newValue )
                                return newValue;
                              else
                                return store.createRecord(
                                  model.modelName,
                                  { [field]: value } );
                            } );

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

      function reduceCompositeChain( keyExp ) {
        return Promise.all(
                keyExp.map( exp =>
                  reduceFieldChain( exp.expansionTail, exp.value )
                    .then( value => { return { field: exp.finalExpansion.field, value: value }; } )
          )).then( values => {

            let query = {};
            values.forEach( val => {
              if ( typeof val.value === 'object' )
                query[val.field + 'Id'] = val.value.get('id');
              else
                query[val.field] = val.value;
            });
            return [ lookUpByProperties( rootModel.modelName, query ), values ];
          } );
      }



      let [firstColumn, ...csvKeys] = Object.keys( csvRow );
      let rootExpansion = parseFieldMapping( null, firstColumn, store );
      let rootModel = rootExpansion.slice(-1)[0].model;
      let keyExpansions = [];
      let expansions = [];



      processMapping( rootExpansion, firstColumn );

      csvKeys.forEach(
        key => processMapping(
           parseFieldMapping( rootModel, key, store ), key
         ));

      // look up combined key
      return reduceCompositeChain(keyExpansions)
        .then( createNewRecordIfNull )
        // retrieve all the fields for the object
        .then( rootObject =>
          Promise.all(
            expansions.map(
                exp  =>
                reduceFieldChain( exp.expansionTail, exp.value )
                  .then( value => {
                      let { model, kind, field } = exp.finalExpansion;
                      let convertedValue = convertTypes( model, field, value );

                      if ( kind === 'hasMany' ) {
                        rootObject.get(field).pushObject( convertedValue );
                      } else {
                        rootObject.set( field, convertedValue );
                      }
                    }))
            ).then( () => rootObject ) );
  }
});
