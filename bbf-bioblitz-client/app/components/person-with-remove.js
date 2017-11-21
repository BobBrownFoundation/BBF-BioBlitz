import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removePerson() {
      this.get('row.content').destroyRecord();
    }
  }
});
