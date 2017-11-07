import { Controller } from 'lux-framework';
import Person from 'app/models/person';

class PeopleController extends Controller {
  filter = [
      'lastName',
      'firstName',
      'name'
    ];

  beforeAction = [
    // If a filter is supplied with the filter parameter "name" then this is
    // transparently converted into a filter with firstName and lastName set
    // appropriately.
    function filterByName(request) {
      let filter = request.params.filter;
      if ( filter.name ) {
        let name = filter.name;
        delete filter.name;
        let [ firstName, lastName ] = name.split(/\s+/);
        filter.firstName = firstName;
        filter.lastName = lastName;
      }
    }
  ];

}

export default PeopleController;
