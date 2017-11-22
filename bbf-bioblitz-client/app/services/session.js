import Ember from 'ember';

export default Ember.Service.extend({
  admin: null,
  isAdmin: Ember.computed('admin', function() { return this.get('admin') === 'xyz' } )
});
