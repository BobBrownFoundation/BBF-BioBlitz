import { Model } from 'lux-framework';

class Role extends Model {
  static hasMany = {
    people: {
      model: 'person',
      inverse: 'capabilities',
      through: 'capability'
    }
  };
}

export default Role;
