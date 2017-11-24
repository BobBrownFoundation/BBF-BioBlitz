#! /usr/bin/node
var fs = require('fs');
var { parse, stringify } = require('csv');


var transform = require('stream-transform');
var streamify = require('stream-array');

var parser = parse({delimiter: ',', columns:true, quote:'"'});

var input = process.stdin;

var surveys = {};


function processInputRecord( record ) {
  function insert( participant, location, timeslot, survey ) {
    if ( typeof survey === 'undefined' || survey.length === 0 )
      return;
    console.log(survey);
    surveys[survey] = true;

  }

  switch ( record['FRI_loc_choice'] ) {
    case 'F_C':
      insert( record['name'], 'Coast', 'Friday AM', record['FRI_AM_Coast'] );
      insert( record['name'], 'Coast', 'Friday PM', record['FRI_PM_Coast'] );
      break;
    case 'F_A':
      insert( record['name'], 'Aquatic', 'Friday AM', record['FRI_AM_Aquatic'] );
      insert( record['name'], 'Aquatic', 'Friday PM', record['FRI_PM_Aquatic'] );
      break;
  }

  switch ( record['FRI_EVE_choice'] ) {
    case 'Yes':
      insert( record['name'], 'Forest', 'Friday EVE', record['FRI_EVE_Forest'] );
      break;
  }

  switch ( record['SAT_DAWN_choice'] ) {
    case 'Yes':
      insert( record['name'], 'Forest', 'Saturday DAWN', record['SAT_DAWN_Forest'] );
      break;
  }

  switch ( record['SAT_loc_choice'] ) {
    case 'S_C':
      insert( record['name'], 'Coast', 'Saturday AM', record['SAT_AM_Coast'] );
      insert( record['name'], 'Coast', 'Saturday PM', record['SAT_PM_Coast'] );
      break;

    case 'Sa_Aq':
      insert( record['name'], 'Aquatic', 'Saturday AM', record['SAT_AM_Aquatic'] );
      insert( record['name'], 'Aquatic', 'Saturday PM', record['SAT_PM_Aquatic'] );
      break;

    case 'S_F':
      insert( record['name'], 'Forest', 'Saturday AM', record['SAT_AM_Forest'] );
      insert( record['name'], 'Forest', 'Saturday PM', record['SAT_PM_Forest'] );
      break;
  }

  switch ( record['SAT_EVE_choice'] ) {
    case 'Yes':
      insert( record['name'], 'Plain', 'Saturday EVE', record['SAT_EVE_Plains'] );
      break;
  }

  switch ( record['SUN_loc_choice'] ) {
    case 'Su_F':
      insert( record['name'], 'Forest', 'Sunday AM', record['SUN_AM_Forest'] );
      insert( record['name'], 'Forest', 'Sunday PM', record['SUN_PM_Forest'] );
      break;

    case 'Su_P':
      insert( record['name'], 'Plain', 'Sunday AM', record['SUN_AM_Plain'] );
      insert( record['name'], 'Plain', 'Sunday PM', record['SUN_PM_Plain'] );
      break;

    case 'Su_Aq':
      insert( record['name'], 'Aquatic', 'Sunday AM', record['SUN_AM_Forest'] );
      insert( record['name'], 'Aquatic', 'Sunday PM', record['SUN_PM_Forest'] );
      break;
  }
}


  var columns = {
    survey: "Survey:name",
  };


  parser.on('readable', function(){
    console.log("HELLO");
    while(row = parser.read()){
      console.log("HELLO2");
      processInputRecord( row );
    }
  });
  parser.on('error', function(err){
    console.log(err.message);
});
  parser.on('finish', function(){
    stringify( Object.keys(surveys), { header: true, columns: columns, quoted: true }, function(err, s) {
      process.stdout.write(s);
    } );
  });


parser.write(input);
parser.end();
