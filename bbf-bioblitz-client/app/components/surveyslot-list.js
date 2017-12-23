import Ember from 'ember';

export default Ember.Component.extend({
  surveyslot: null,
  slots: Ember.computed( 'surveyslot.participants', 'surveyslot.availableSlots',
    function() {
      let participants = this.get('surveyslot.participants')
        .sortBy( 'surveyslot.participants.person.name')
        .toArray();
      let availableSlots = this.get('surveyslot.availableSlots');
      if ( availableSlots > 0 )
        participants = participants.concat([...Array(availableSlots)]);
      return participants;
    })
});
