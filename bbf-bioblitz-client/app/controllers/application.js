import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['admin','reportMode'],
  admin: Ember.computed.alias('session.admin'),
  reportMode: null
});
