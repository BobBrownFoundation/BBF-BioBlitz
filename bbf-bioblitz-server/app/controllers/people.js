import { Controller } from 'lux-framework';

class PeopleController extends Controller {
  params = [
      'lastName',
      'firstName'
    ];
}

export default PeopleController;
