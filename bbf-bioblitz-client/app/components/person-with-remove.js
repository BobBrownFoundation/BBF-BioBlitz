import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    removeParticipant() {
      this.get('row.content').destroyRecord()
        .then( (p) => this.get('store').unloadRecord(p) );
    }
  }
});
