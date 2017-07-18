import Ember from 'ember';

export default Ember.Component.extend({
  importer: Ember.inject.service(),
  actions: {
    uploadCsv(file) {
      file.readAsText()
        .then( txt => this.get('importer').import(txt) )
        .then( () => file.set('state', 'uploaded') );
    }
  }
});
