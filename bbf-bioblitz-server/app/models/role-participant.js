import { Model } from 'lux-framework';

class RoleParticipant extends Model {
  static belongsTo = {
      role: {
        inverse: 'role-participant'
      },
      participant: {
        inverse: 'role-participant'
      }
    }
}

export default RoleParticipant;
