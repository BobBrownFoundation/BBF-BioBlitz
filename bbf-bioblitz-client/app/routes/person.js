import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.Promise.all( [
        this.get('store').findRecord( 'person', params.person_id, { reload: true }  ),
        this.get('store').findAll( 'participant', { reload: true }  ),
        this.get('store').findAll( 'surveyslot', { reload: true }  ),
        this.get('store').findAll( 'location', { reload: true }  ),
        this.get('store').findAll( 'timeslot', { reload: true }  ),
        this.get('store').findAll( 'survey', { reload: true }  )
      ]).then( ([ model ]) => model );
  }
});
