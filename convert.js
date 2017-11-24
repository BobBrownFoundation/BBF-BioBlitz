#! /usr/bin/node
var fs = require('fs');
var { parse, stringify } = require('csv');

var columns = {
  survey: "Participant:Surveyslot:Survey:name",
  timeslot: "Participant:Surveyslot:Timeslot:name",
  location: "Participant:Surveyslot:Location:name",
  participant: "Participant:Person:name"
};
var stringifier = stringify({ header: true, columns: columns, quoted: true });
var transform = require('stream-transform');

var parser = parse({delimiter: ',', columns:true, quote:'"'});
//var input = fs.createReadStream('/etc/passwd');
input = process.stdin;
var transformer = transform(function(record, callback){
    records = [];
    function insert( participant, location, timeslot, survey ) {
      if ( typeof survey === 'undefined' || survey.length === 0 )
        return;
      records.push( [ survey, timeslot, location, participant ] );
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
        insert( record['name'], 'Plain', 'Sunday AM', record['SUN_AM_Plains'] );
        insert( record['name'], 'Plain', 'Sunday PM', record['SUN_PM_Plains'] );
        break;

      case 'Su_Aq':
        insert( record['name'], 'Aquatic', 'Sunday AM', record['SUN_AM_Forest'] );
        insert( record['name'], 'Aquatic', 'Sunday PM', record['SUN_PM_Forest'] );
        break;
    }
    callback(null, ...records);
}, {parallel: 10});

input
  .pipe(parser)
  .pipe(transformer)
  .pipe(stringifier)
  .pipe(process.stdout);
