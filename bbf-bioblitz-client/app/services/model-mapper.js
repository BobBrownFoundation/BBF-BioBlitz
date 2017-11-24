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
      /*
        each chain which is [ {model: ..., kind:..., field:... } ]
        is recursively processed into the following
        data structure :

          composedChain: {
            <field>: {
              <model>: { <field>: { }..., kind: value: { <model>: { .. } }
            }
          }

          Participant:Person:name, Participant:Surveyslot:Location:name, Participant:Surveyslot:Timeslot:name, Participant:Surveyslot:Survey:name

          {
            model: Participant
            values: {
              'person': {
                model: Person,
                values: {
                  'name': true
                }
              },
              'surveyslot': {
                  model: Surveyslot,
                  values: {
                    'location': {
                      model: Location,
                      values: {
                       'name': true
                      }
                    },
                    'survey': {
                      model: Survey,
                      values: {
                       'name': true
                      }
                    },
                    'timeslot': {
                      model: Timeslot,
                      values: {
                        'name': true
                      }
                    }
                }

     */

     function composeChains( composedChain, [c, ...chain], value ) {
       if ( !composedChain.model ) {
         composedChain.model = c.model;
         composedChain.values = {};
       } else if ( composedChain.model.modelName !== c.model.modelName ) {
         throw new Error( 'Can\'t combine different models!' );
       }

       if ( c.kind === 'belongsTo' ) {
         if ( ! (c.field in composedChain.values) ) {
           composedChain.values[c.field] = {};
         }
         composeChains( composedChain.values[c.field], chain, value );
       } else if ( c.kind === 'value' ) {
         composedChain.values[c.field] = value;
       } else {
         throw new Error('Can\'t dereference ' + c.kind + ' relationships (sorry)');
       }
     }

      function processMapping( expansionTail, name ) {
        let finalExpansion = expansionTail.pop();
        let value = csvRow[name];
        if ( finalExpansion.useAsKey ) {
          expansionTail.push( finalExpansion );
          composeChains( keyExpansions, expansionTail.reverse(), value );
        } else {
          expansions.push( {
              name: name,
              value: value,
              finalExpansion: finalExpansion,
              expansionTail: expansionTail
          } );
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

      /* takes the composed chain datastructure and
         performs value lookups to look up root object */
      function reduceCompositeChain( composedChain ) {
        return Promise.all(
          Object.keys( composedChain.values )
            .map( field => {
              let chain = composedChain.values[field];
              if ( typeof chain === 'object' ) {
                 return reduceCompositeChain( chain )
                  .then( value => {
                    return {
                      query: field + 'Id',
                      queryValue: value.get('id'),
                      field: field,
                      value: value,
                      chain: chain
                    };
                  });
              } else {
                // value is already retrieved
                return Promise.resolve( {
                  query: field,
                  queryValue: chain,
                  field: field,
                  value: chain
                });
              }
            }))
            .then( values => {
              // prepare query hashes
              let props = {};
              let queryProps = {};

              values.forEach( ({ query, queryValue, field, value, chain }) => {
                if ( typeof queryValue === 'undefined' || queryValue === null ) {
                  Ember.Logger.log('error getting chain: ', chain);
                  //Ember.Logger.log(`Field ${query} is undefined`);
                }
                queryProps[query] = queryValue;
                props[field] = value;

              });
              return lookUpByProperties( composedChain.model.modelName, queryProps )
                .then( value =>{
                  if ( value !== null )
                    return value;
                  return store.createRecord( composedChain.model.modelName, props );
                });

            });
      }



      let [firstColumn, ...csvKeys] = Object.keys( csvRow );
      let rootExpansion = parseFieldMapping( null, firstColumn, store );
      let rootModel = rootExpansion.slice(-1)[0].model;
      let keyExpansions = {};
      let expansions = [];



      processMapping( rootExpansion, firstColumn );

      csvKeys.forEach(
        key => processMapping(
           parseFieldMapping( rootModel, key, store ), key
         ));

      // look up combined key
      return reduceCompositeChain(keyExpansions)

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
