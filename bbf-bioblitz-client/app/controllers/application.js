import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['admin'],
  admin: Ember.computed.alias('session.admin')
});
