import yadda from '../../helpers/yadda';
import parse from 'npm:csv-parse';

export default function(assert) {
  function csv_file_converter(csv, next) {
    parse( csv, {
      columns: true,
      trim: true
    }, (err,result) => {
      if (err) {
        throw err;
      }
      next(err,result);
    } );
  }
  var dictionary = new yadda.Dictionary()
        .define('csv', /([^\u0000]*)/, csv_file_converter);
  return yadda.localisation.English.library(dictionary)
    .when('I import the following spreadsheet:\n$csv', function(csv, next) {
      
      next()
    })
    .when('I look in the folder', function(next) {
      assert.ok(true, this.step);
      next();
    });
}
