import { Model } from 'lux-framework';

class Role extends Model {
  static hasMany = {
    people: {
      model: 'person',
      inverse: 'roles',
      through: 'capability'
    }
  };
}

export default Role;
