import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.Promise.all( [
        this.get('store').findRecord( 'survey', params.survey_id, { reload: true }  ),
        this.get('store').findAll( 'surveyslot', { reload: true } )
      ]).then( ([ model ]) => model );
  }
});
