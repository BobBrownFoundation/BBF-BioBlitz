import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  classNames: ['select-expand-button'],
  surveyslot: null, // the survey slot to select from
  availableParticipants: [],
  selectedParticipant: null,
  assignDisabled: Ember.computed.empty('selectedParticipant'),
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
      let store = this.get('store');

      store.createRecord('participant', {
          person: this.get('selectedParticipant'),
          surveyslot: this.get('surveyslot')
      }).save()
        .then( () => {
            if (!this.get('isDestroyed')) {
              this.set('showing', false);
            }
          } )
        .catch(
            () => alert('Unable to assign participant - check that this time isn\'t already filled')
          );
    }
  }
});
