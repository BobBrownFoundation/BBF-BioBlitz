import DS from 'ember-data';

export default DS.Model.extend({
  start: DS.attr('date'),
  duration: DS.attr('number'),
  locations: DS.hasMany('location')
});
