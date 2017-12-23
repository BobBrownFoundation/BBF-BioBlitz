import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.Promise.all( [
        this.get('store').findAll( 'person', { reload: true } ),
        this.get('store').findAll( 'participant', { reload: true }),
        this.get('store').findAll( 'location', { reload: true } ),
        this.get('store').findAll( 'timeslot', { reload: true } ),
        this.get('store').findAll( 'survey', { reload: true } ),
        this.get('store').findAll( 'team', { reload: true } )
      ]).then( ([model]) => model );
  }
});
