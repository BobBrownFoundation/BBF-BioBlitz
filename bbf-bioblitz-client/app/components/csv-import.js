import EmberUploader from 'ember-uploader';
import Ember from 'ember';

export default EmberUploader.FileField.extend({
  importer: Ember.inject.service(),
  filesDidChange: function(files) {
    if (!Ember.isEmpty(files)) {
      files.forEach( file => this.get('importer').import(file) );
    }
  }
});
