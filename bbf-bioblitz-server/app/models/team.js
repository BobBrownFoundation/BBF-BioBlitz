import { Model } from 'lux-framework';

class Team extends Model {
  participants: {
    inverse: 'teams',
    through: 'teamParticipants'
  }
}

export default Team;
