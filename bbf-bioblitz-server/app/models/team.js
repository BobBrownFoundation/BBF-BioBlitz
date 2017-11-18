import { Model } from 'lux-framework';

class Team extends Model {
  static hasMany = {
    members: {
      model: 'person',
      inverse: 'team'
    }
  };
}

export default Team;
