import DS from 'ember-data';
import ENV from 'bbf-bioblitz/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.host,
  dataForRequest(params) {

      // Encode commas to %%2C in order to get them past the Lux filter code
      switch( params.requestType ) {
        case 'query':
          let attrs = params.query.filter;
          Object.keys(attrs)
            .forEach( (key) => attrs[key] = attrs[key].replace(',','%2C') );
          break;
      }

      return this._super(...arguments);
    }
});
