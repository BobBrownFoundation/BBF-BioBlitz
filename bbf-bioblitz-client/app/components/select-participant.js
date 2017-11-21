import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  classNames: ['select-expand-button'],
  surveyslot: null, // the survey slot to select from
  availableParticipants: [],
  selectedParticipant: null,
  showing: false,


  findAvailableParticipants() {
    let store = this.get('store');
    function excludeExisting( [ rs, participants ] ) {
      let result = rs;
      participants.forEach( (p) => {
        result = result.reject( (r)=> r.get('name') === p.get('person.name') );
      });
      return result;
    }

    return Ember.RSVP.Promise.all( [
      store.findAll('person'),
      this.get('surveyslot.participants') ] )
        .then( excludeExisting );
  },

  init() {
    this._super(...arguments);
    this.findAvailableParticipants()
      .then( (ps) => this.set('availableParticipants', ps) );
  },


  actions: {
    setSelection( p ) {
      this.set('selectedParticipant', p );
    },
    expand() {
      this.set('showing', true);
    },
    collapse() {
      this.set('showing', false);
    },
    selectParticipant() {
      this.get('store').createRecord('participant', {
          person: this.get('selectedParticipant'),
          surveyslot: this.get('surveyslot')
      }).save()
        .then( () => this.set('showing', false) );

    }
  }
});
