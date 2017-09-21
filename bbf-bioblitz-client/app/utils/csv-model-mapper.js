import Ember from 'ember';
const { Promise } = Ember.RSVP;

export default Ember.Object.extend({
  store: null,
  convertCsvRowToModel( csvRow ) {
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

      function resolveField( model, fieldName, fieldValue ) {

        let dsc = parseColumnName( fieldName );
        if ( dsc.indirectName !== null ) {
          let refModelName = store
              .modelFor(model)
              .typeForRelationship(dsc.indirectName.camelize())
              .modelName;
          let queryProps = {};
          queryProps[dsc.fieldName] = fieldValue;
          return store.queryRecord( refModelName, queryProps )
            .then( model => { return { name: dsc.fieldName, value: model.get('id') } } );
        } else {
          return Promise.resolve( { name: dsc.fieldName, value: fieldValue } );
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
        modelProps['name'] = firstColumnValue;
      } else {
        modelProps.model = firstColumn.indirectName;
        modelProps[firstColumn.fieldName] = firstColumnValue;
      }

      // Iterate the rest of the columns, parsing the column name to
      // determin what the property name is to set
      return Promise.all(
          csvKeys.map( name => resolveField( modelProps.model, name, csvRow[name] ) ) )
        .then( props => props.forEach( p => modelProps[p.name] = p.value ) )
        .then( () => modelProps );

  }
});
