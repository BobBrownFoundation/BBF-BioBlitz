import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.Promise.all( [
        this.get('store').findRecord( 'surveyslot', params.surveyslot_id, { reload: true }  ),
        this.get('store').findAll( 'location', { reload: true } ),
        this.get('store').findAll( 'timeslot', { reload: true } ),
        this.get('store').findAll( 'survey', { reload: true } )
      ]).then( ([ model ]) => model );
  },
  actions: {
    removePerson(person) {
      alert('hello ' + person.name);
    }
  }
});
