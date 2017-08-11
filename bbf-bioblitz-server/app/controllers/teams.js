import { Controller } from 'lux-framework';

class TeamsController extends Controller {
  static hasMany = {
    participants: {
      inverse: 'teams',
      through: 'team-participants'
    }
  };
  params = [
      'name',
      'description'
    ];
}

export default TeamsController;
