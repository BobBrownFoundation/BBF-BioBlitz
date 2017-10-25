import Ember from 'ember';
const { Promise } = Ember.RSVP;

export default Ember.Service.extend({
  store: Ember.inject.service(),
  mapFieldsToModel( csvRow ) {
      let store = this.get('store');

      function parseColumnName( fieldName ) {
        let parts = fieldName.split(':');
        let dsc = {
          fieldName: null,
          indirectName: null
        };
        if ( parts.length == 1 ) {
          dsc.fieldName = parts[0].camelize();
        } else {
          dsc.fieldName = parts[1].camelize();
          dsc.indirectName = parts[0].dasherize();
        }
        return dsc;
      }

      function convertTypes( model, fieldName, fieldValue ) {
        let attr = Ember.get( store.modelFor(model), "attributes" ).get(fieldName);
        if ( attr && attr.type === 'date' ) {
          return new Date( fieldValue );
        }
        return fieldValue;
      }


      function resolveField( model, fieldName, fieldValue ) {

        let dsc = parseColumnName( fieldName );

        if ( dsc.indirectName !== null ) {
          let refModelName = null;
          try {
              refModelName = store
              .modelFor(model)
              .typeForRelationship(dsc.indirectName.camelize(), store)
              .modelName;
          } catch( e ) {
            return Promise.reject( new Error("Unable to find model for " + model + "." + dsc.indirectName ) );
          }
          let queryProps = {};
          queryProps[dsc.fieldName] = fieldValue;
          return store.query( refModelName,{ filter:  queryProps } )
            .then( model => {
                if ( model.get('firstObject') ) {
                  return { name: dsc.fieldName, value: model.get('firstObject').get('id') };
                } else {
                  throw new Error("Unable to find " + refModelName + "." + dsc.fieldName + " == " + fieldValue);
                }
              } );
        } else {

          return Promise.resolve( { name: dsc.fieldName,
            value: convertTypes( model, dsc.fieldName, fieldValue ) } );
        }
      }

      // This reurns the model name and dictionary of properties to set
      let modelProps = {
        model: null,
        props: {}
      };

      // The first column name is special: if it has no colon character then
      // it refers to the name of the model and the values are the ids.
      //
      // If there is a colon then the values are stored in that proprty name.
      let csvKeys = Object.keys( csvRow ),
          firstColumnName = csvKeys.shift(),
          firstColumnValue = csvRow[firstColumnName],
          firstColumn = parseColumnName( firstColumnName );

      if ( firstColumn.indirectName === null ) {
        modelProps.model = firstColumn.fieldName;
        modelProps.props['name'] = firstColumnValue;
      } else if ( firstColumn.fieldName === 'id' ) {
        // FIXME: Just ignore any Id columns since they should be incrementing
        // integers anyway - we could check the returned id to match??
        modelProps.model = firstColumn.indirectName
      } else {
        modelProps.model = firstColumn.indirectName;
        modelProps.props[firstColumn.fieldName] = firstColumnValue;
      }

      // Iterate the rest of the columns, parsing the column name to
      // determin what the property name is to set
      return Promise.all(
          csvKeys.map( name => resolveField( modelProps.model, name, csvRow[name] ) ) )
        .then( props => props.forEach( p => modelProps.props[p.name] = p.value ) )
        .then( () => modelProps );

  }
});
