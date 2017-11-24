import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  start: DS.attr('date'),
  duration: DS.attr('number'),
  locations: DS.hasMany('location')
});
