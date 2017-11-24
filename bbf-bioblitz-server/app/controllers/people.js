import { Controller } from 'lux-framework';
import Person from 'app/models/person';

class PeopleController extends Controller {
  defaultPerPage: number = 999999;
  params = [ 'lastName', 'firstName', 'team' ];
  filter = [ 'lastName', 'firstName', 'name', 'teamId' ];
  beforeAction = [
    // If a filter is supplied with the filter parameter "name" then this is
    // transparently converted into a filter with firstName and lastName set
    // appropriately.
    function filterByName(request) {
      let filter = request.params.filter;
      if ( filter && filter.name ) {
        let name = filter.name;
        delete filter.name;
        let [ firstName, ...lastNames] = name.split(/\s+/);
        filter.firstName = firstName;
        filter.lastName = lastNames.join(' ');
      }
    }
  ];

}

export default PeopleController;
