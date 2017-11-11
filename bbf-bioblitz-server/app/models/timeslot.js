import { Model } from 'lux-framework';

class Timeslot extends Model {
  static hasMany = {
      surveyslots: {
        inverse: 'timeslot'
      }
    }
}

export default Timeslot;
