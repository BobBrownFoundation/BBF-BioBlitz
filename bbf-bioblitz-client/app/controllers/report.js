import Ember from 'ember';

function finalWord( s ) {
  return s.split(" ").slice(-1)[0];
}

export default Ember.Controller.extend({
  queryParams: [ 'day' ],
  day: null,
  surveyslots: [],

  surveyslotsBySite: Ember.computed( 'surveyslots', function() {
    let surveyslots = this.get('surveyslots');
    /*return surveyslots.sort(  (a,b) => {
      return a.get('location.name').localeCompare(b.get('location.name'));
    });*/
    return surveyslots.sortBy( 'timeslot.start','location.name','survey.name'  );
  }),

  participants: Ember.computed('surveyslots', function() {
    let surveyslots = this.get('surveyslots');
    let participants = surveyslots
      .map( ss => ss.get('participants') )
      .reduce( (acc,p) => acc.concat(p.toArray()), [] )
      .sortBy(  'surveyslot.location.name', 'person.name' );
    return participants.reject( (p) => p.get('surveyslot.survey.name') === 'None of these' );

  }),

  participantsMorning: Ember.computed('participants', function() {
    let participants = this.get('participants');
    return participants.filter( p => finalWord( p.get('surveyslot.timeslot.name') ) === 'AM' );
  }),

  participantsAfternoon: Ember.computed('participants', function() {
    let participants = this.get('participants');
    return participants.filter( p => finalWord( p.get('surveyslot.timeslot.name') ) === 'PM' );
  }),

  doubleTimeSlots: Ember.computed( 'timeslots', function() { return this.get('timeslots.length') > 1; }),

  title: '',

  timeslots:  Ember.computed( 'day', function(){
    let timeslots = [];
    switch ( this.get('day').toLowerCase() ) {
      case 'friday':
        timeslots = timeslots.concat( [ 'Friday AM', 'Friday PM' ] );
        this.set('title', 'Friday');
        break;

      case 'friday_eve':
        timeslots = timeslots.concat( [ 'Friday EVE' ] );
        this.set('title', 'Friday Evening');
        break;

      case 'saturday_dawn':
        timeslots = timeslots.concat( [ 'Saturday DAWN' ] );
        this.set('title', 'Saturday Dawn');
        break;

      case 'saturday':
        timeslots = timeslots.concat( [ 'Saturday AM', 'Saturday PM' ] );
        this.set('title', 'Saturday');
        break;

      case 'saturday_eve':
        timeslots = timeslots.concat( [ 'Saturday EVE' ] );
        this.set('title', 'Saturday Evening');
        break;

      case 'sunday':
        timeslots = timeslots.concat( [ 'Sunday AM', 'Sunday PM' ] );
        this.set('title', 'Sunday');
        break;
    }
    return timeslots;
  }),



  surveyslotsPromise: Ember.computed( 'timeslots', function(){
    let timeslots = this.get('timeslots');
    let store = this.get('store');

    function concatEmberArrays( arrays ) {
      let res = [];
      arrays.forEach( a => {
        a.forEach( i => res.push(i) );
      });
      return res;
    }

    function mapQueryModel( model, field, array ) {
      return Ember.RSVP.Promise.all(
        array.map( (obj) =>
            store.query( model, {filter: { [field]: obj.get('id') } } ) )

      ).then( (models) => models[0]);
    }

    return Ember.RSVP.Promise.all(
        timeslots
          .map( (timeslot) => store
            .query( 'timeslot', { filter: { name: timeslot } } )
            .then( (timeslots) => mapQueryModel( 'surveyslot', 'timeslotId', timeslots ) )
          )
        ).then( (surveyslotss) => concatEmberArrays(surveyslotss) );
})
});
