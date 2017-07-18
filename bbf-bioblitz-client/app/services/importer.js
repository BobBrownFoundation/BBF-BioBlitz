import Ember from 'ember';
import parse from 'npm:csv-parse';

const {
  Promise
} = Ember.RSVP;

export default Ember.Service.extend({
  store: Ember.inject.service(),

  _convertCsvRowToModel( csvRow ) {
      let [ modelName, field = 'name' ] = Object.keys( csvRow )[0].split(':');
      let props = {};
      Object.keys( csvRow )
        .forEach( oldName => {
            let newName;
            if ( oldName === modelName ) {
              newName = field.camelize();
            } else {
              newName = oldName.camelize();
            }
            props[newName] = csvRow[oldName];
          });
      return Promise.resolve( {
        model: modelName.dasherize(),
        props: props
      });
  },

  _commitRecord( model, props ) {
      let store = this.get('store');
      let obj = store.createRecord( model, props );
      return obj.save();
  },

  import( csv ) {

    return new Promise( function (resolve, reject) {
            parse( csv, {
              columns: true,
              trim: true
            }, (err,result) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            } );
      }).then( parsed => {
          return Promise.all(
            parsed.map(
              row => this._convertCsvRowToModel( row )
                .then( ({ model, props }) => this._commitRecord( model, props ) )
            ));
        });
    }
});
