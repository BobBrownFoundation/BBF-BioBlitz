import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('report');
  },
  setupController(controller,model) {
    controller.set('report', this.controllerFor('report'));
  }
});
