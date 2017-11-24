import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  location: DS.belongsTo('location'),
  timeslot: DS.belongsTo('timeslot'),
  survey: DS.belongsTo('survey'),
  participants: DS.hasMany('participant'),
  numberOfParticipants: DS.attr('number'),
  availableSlots: Ember.computed('numberOfParticipants', 'assignedParticipants', function() {
    let numberOfParticipants = this.get('numberOfParticipants');
    let assignedParticipants = this.get('assignedParticipants');
    return numberOfParticipants - assignedParticipants;
  }),
  assignedParticipants: Ember.computed('participants', function() {
    return this.get('participants.length');
  }),
  hasSlotsRemaining: Ember.computed('availableSlots', function() {
    return (this.get('availableSlots') > 0);
  })


});
