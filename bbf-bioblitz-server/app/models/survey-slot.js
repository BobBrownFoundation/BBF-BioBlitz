import { Model } from 'lux-framework';

class SurveySlot extends Model {
  static hasOne = {
    survey: {
      inverse: 'survey-slots'
    },
    location: {
      inverse: 'survey-slots'
    },
    timeslot: {
      inverse: 'survey-slots'
    }
  }

  static hasMany = {
    participants: {
      inverse: 'survey-slots'
    }
  }
}

export default SurveySlot;
