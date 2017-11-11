import { Model } from 'lux-framework';

class Location extends Model {
  static hasMany = {
      surveyslots: {
        inverse: 'location'
      }
    }
}

export default Location;
