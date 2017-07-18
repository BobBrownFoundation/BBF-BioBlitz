import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('upload', function(app, selector, file) {
    const event = Ember.$.Event('change');
    event.target = {
      files: [file]
    };
    Ember.$(selector).trigger(event);
});
