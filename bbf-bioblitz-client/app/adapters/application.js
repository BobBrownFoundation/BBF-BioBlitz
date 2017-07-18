import DS from 'ember-data';
import ENV from 'bbf-bioblitz/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.host
});
