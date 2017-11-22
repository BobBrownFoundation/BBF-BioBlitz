import { Model } from 'lux-framework';
import Person from 'app/models/person';
import Surveyslot from 'app/models/surveyslot';

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
