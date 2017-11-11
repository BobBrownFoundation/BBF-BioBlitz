import { Model } from 'lux-framework';

class Participant extends Model {
  static belongsTo = {
    person: {
      inverse: 'participants'
    },
    surveyslot: {
      inverse: 'participants'
    }
  }
}

export default Participant;
