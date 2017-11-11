import Yadda from '../../helpers/yadda';

export default function(/*assert*/) {

  function csv_file( value, next ) {
    let file = new File([value], "csv_file.csv" )
    return next(null, file);
  }

  var dictionary = new Yadda.Dictionary()
        .define('csv', /([^\u0000]*)/, csv_file )
        .define('table', /([^\u0000]*)/, Yadda.converters.table );

  return Yadda.localisation.English.library(dictionary)
    .when('I import the following spreadsheet:\n$csv', function(csv, next) {
      this.timeout(100000);
      visit('/import');
      andThen( () => upload( 'input', csv, csv.name ) );
      andThen( () => next() );
    })
    .then('the following surveys should be created:\n$table', function(table, next){

      next();
    })
    .then('the following survey list should be created:\n$table', function(table, next){

      next();
    })
    .then('the following participant assignments should be created:\n$table', function(table, next){

      next();
    });
}
