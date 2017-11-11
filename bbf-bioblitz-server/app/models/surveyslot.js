import { Model } from 'lux-framework';

class Surveyslot extends Model {
  static belongsTo = {
    survey: {
      inverse: 'surveyslots'
    },
    location: {
      inverse: 'surveyslots'
    },
    timeslot: {
      inverse: 'surveyslots'
    }
  }

  static hasMany = {
    participants: {
      model: 'participant',
      inverse: 'surveyslot'
    }
  }
}

export default Surveyslot;
