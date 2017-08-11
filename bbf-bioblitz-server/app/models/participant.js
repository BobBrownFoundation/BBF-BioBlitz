import { Model } from 'lux-framework';

class Participant extends Model {
  static hasMany = {
    memberOf: {
      model: 'team',
      inverse: 'participants',
      through: 'teamParticipants'
    },
    capabilities: {
      model: 'role',
      inverse: 'participants',
      through: 'roleParticipants'
    },
  };
}

export default Participant;
