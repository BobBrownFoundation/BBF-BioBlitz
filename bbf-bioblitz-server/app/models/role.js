import { Model } from 'lux-framework';

class Role extends Model {
  participants: {
    model: 'participant',
    inverse: 'capabilities',
    through: 'roleParticipants'
  }
}

export default Role;
