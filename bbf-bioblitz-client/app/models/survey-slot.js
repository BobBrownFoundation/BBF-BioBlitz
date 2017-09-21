import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.belongsTo('location'),
  time: DS.belongsTo('timeslot'),
  participants: DS.hasMany('participant'),
  numberOfParticipants: DS.attr('int')
});
