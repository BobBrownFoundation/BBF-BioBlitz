export default function()  {
  this.resource('teams');
  this.resource('roles');
  this.resource('locations');
  this.resource('people');
  this.resource('capabilities');

  //this.resource('team-participants');
  this.resource('participants');
  this.resource('surveys');
  this.resource('timeslots');
  this.resource('surveyslots');
};
