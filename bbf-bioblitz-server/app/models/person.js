import { Model } from 'lux-framework';

class Person extends Model {
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
}

export default Person;
