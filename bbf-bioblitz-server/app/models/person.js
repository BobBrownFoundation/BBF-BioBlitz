import { Model } from 'lux-framework';

class Person extends Model {
  static hasMany = {
    capabilities: {
      model: 'role',
      inverse: 'people',
      through: 'capability'
    }
  };
}

export default Person;
