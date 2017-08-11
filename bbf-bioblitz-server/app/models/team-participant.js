import { Model } from 'lux-framework';

class TeamParticipant extends Model {
  static belongsTo = {
      team: {
        inverse: 'team-participant'
      },
      participant: {
        inverse: 'team-participant'
      }
    }
}

export default TeamParticipant;
