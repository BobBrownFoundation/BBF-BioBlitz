import { Controller } from 'lux-framework';

class RolesController extends Controller {
  defaultPerPage: number = 999999;
  params = [
      'name',
      'description'
    ];
}

export default RolesController;
