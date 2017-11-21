import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  visible: Ember.computed('value', function() {
    return this.get('value') !== 'Participant' && this.get('value');
  })
});
