import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.belongsTo('location'),
  timeslot: DS.belongsTo('timeslot'),
  survey: DS.belongsTo('survey'),
  participants: DS.hasMany('person'),
  numberOfParticipants: DS.attr('number')
});
