import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  location: DS.belongsTo('location'),
  timeslot: DS.belongsTo('timeslot'),
  survey: DS.belongsTo('survey'),
  participants: DS.hasMany('participant'),
  numberOfParticipants: DS.attr('number'),
  availableSlots: Ember.computed('numberOfParticipants', 'participants', function() {
    let numberOfParticipants = this.get('numberOfParticipants');
    let assignedParticipants = this.get('participants.length');
    return numberOfParticipants - assignedParticipants;
  }),
  hasSlotsRemaining: Ember.computed('availableSlots', function() {
    return (this.get('availableSlots') > 0);
  })


});
