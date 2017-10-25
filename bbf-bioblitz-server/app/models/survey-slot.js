import { Model } from 'lux-framework';

class SurveySlot extends Model {
  static hasOne = {
    survey: {
      inverse: 'survey-slot'
    },
    location: {
      inverse: 'survey-slot'
    },
    timeslot: {
      inverse: 'survey-slot'
    }
  }

  static hasMany = {
    participants: {
      model: 'people',
      inverse: 'survey-slots',
      through: 'survey-participant'
    }
  }
}

export default SurveySlot;
