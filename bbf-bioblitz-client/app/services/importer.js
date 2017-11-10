import Ember from 'ember';
import parse from 'npm:csv-parse';

const {
  Promise
} = Ember.RSVP;

export default Ember.Service.extend({
  modelMapper: Ember.inject.service(),
  import( csv ) {
    let mapper = this.get('modelMapper');

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
          row => mapper.mapFieldsToModel( row )
            .then( obj => obj.save() )
        ));
    }

    return parseCsv(csv).then( mapCsvRow );
    }
});
