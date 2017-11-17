import { Controller } from 'lux-framework';

class LocationsController extends Controller {
  defaultPerPage: number = 999999;
  params = [
      'name',
      'description'
    ];
}

export default LocationsController;
