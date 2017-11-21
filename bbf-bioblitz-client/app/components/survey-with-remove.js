import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeSurveyslot() {
      this.get('row.content').destroyRecord();
    }
  }
});
