import { Controller } from 'lux-framework';

class CapabilitiesController extends Controller {
  defaultPerPage: number = 999999;
  params = [
      'role',
      'person'
    ];
}

export default CapabilitiesController;
