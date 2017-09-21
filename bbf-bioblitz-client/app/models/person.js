import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  memberOf: DS.hasMany('team'),
  capabilities: DS.hasMany('role'),
});
