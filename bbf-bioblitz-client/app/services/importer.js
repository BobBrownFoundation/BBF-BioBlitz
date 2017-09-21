import Ember from 'ember';
import parse from 'npm:csv-parse';
import CsvMapper from 'bbf-bioblitz/utils/csv-model-mapper';

const {
  Promise
} = Ember.RSVP;

export default Ember.Service.extend({

  store: Ember.inject.service(),


  import( csv ) {
    let store = this.get('store');

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
      let csvMapper = CsvMapper.create( { store: store });

      return Promise.all(
        parsed.map(
          row => csvMapper.convertCsvRowToModel( row, csvMapper )
            .then( ({ model, props }) => commitRecord( model, props ) )
        ));
    }

    return parseCsv(csv).then( mapCsvRow );
    }
});
