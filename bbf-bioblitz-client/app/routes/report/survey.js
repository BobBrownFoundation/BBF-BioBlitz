import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('report');
  },
  setupController(controller) {
    controller.set('report', this.controllerFor('report'));
  }
});
