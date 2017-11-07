import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({

  normalize(typeClass, json) {
    // Replace any %2C with ','
    var attrs = json.attributes;
    Ember.get(typeClass, 'attributes')
      .forEach(function(name, meta) {
        if ( meta.type === 'string' ) {
          let payloadName = this.keyForAttribute(name);
          attrs[payloadName]=attrs[payloadName].replace('%2C', ',');
        }
      });
    return this._super.apply(this, arguments);
  },

  serialize(snapshot /*, options*/) {
    // Replace any commas in strings with %2C
    let json = this._super(...arguments);
    let attrs = json.data.attributes;
    snapshot.eachAttribute( (name,meta) => {
      if ( meta.type === 'string' )
        attrs[this.keyForAttribute(name)]=snapshot.attr(name).replace(',', '%2C');
    });
    return json;

  }
});
