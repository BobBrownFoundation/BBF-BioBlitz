import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  dialog: Ember.inject.service(),
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

  updateParticipants() {
    return this.findAvailableParticipants()
      .then( (ps) => {
        this.set('availableParticipants', ps);
      } );
  },

  didReceiveAttrs() {
    this._super(...arguments);
    return this.updateParticipants();
  },


  actions: {
    setSelection( p ) {
      this.set('selectedParticipant', p );
    },
    expand() {
      this.updateParticipants()
        .then( () => this.set('showing', true) );
    },
    collapse() {
      this.set('showing', false);
    },
    selectParticipant() {
      let store = this.get('store');
      let participant = store.createRecord('participant', {
          person: this.get('selectedParticipant'),
          surveyslot: this.get('surveyslot')
      });
      participant.save()
        .then( () => {
            if (!this.get('isDestroyed')) {
              this.set('showing', false);
            }
          } )
        .catch(
            () => {
              store.unloadRecord(participant);
              this.get('dialog').alert('assign-participant-error');
            }

          );
    }
  }
});
