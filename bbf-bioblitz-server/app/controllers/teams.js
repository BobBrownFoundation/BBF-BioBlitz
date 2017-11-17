import { Controller } from 'lux-framework';

class TeamsController extends Controller {
  defaultPerPage: number = 999999;
  params = [
      'name',
      'description'
    ];
}

export default TeamsController;
