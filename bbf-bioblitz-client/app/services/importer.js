import Ember from 'ember';
import parse from 'npm:csv-parse';

const {
  Promise
} = Ember.RSVP;

export default Ember.Service.extend({

  store: Ember.inject.service(),
  modelMapper: Ember.inject.service(),


  import( csv ) {
    let store = this.get('store');
    let mapper = this.get('modelMapper');

    function commitRecord( model, props ) {
        let obj = store.createRecord( model, props );
        return obj.save();
    }

    function parseCsv( csv ) {
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
        });
    }

    function mapCsvRow( parsed ) {
      return Promise.all(
        parsed.map(
          row => mapper.mapFieldsToModel( row, mapper )
            .then( ({ model, props }) => commitRecord( model, props ) )
        ));
    }

    return parseCsv(csv).then( mapCsvRow );
    }
});
