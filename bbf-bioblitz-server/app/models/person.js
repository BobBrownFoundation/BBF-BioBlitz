import { Model } from 'lux-framework';
import capitalize from '../utils/capitalize';
class Person extends Model {
  static belongsTo = {
    team: {
      inverse: 'members'
    }
  };
  static hasMany = {
    capabilities: {
      model: 'role',
      inverse: 'people',
      through: 'capability'
    },
    participants: {
      model: 'participant',
      inverse: 'person'
    }
  };

  static hooks = {
    async beforeSave(person) {
      person.firstName = capitalize( person.firstName );
      person.lastName = capitalize( person.lastName );
    }
  };
}

export default Person;
