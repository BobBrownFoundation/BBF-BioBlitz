import { Controller } from 'lux-framework';

class ParticipantsController extends Controller {
  defaultPerPage: number = 999999;
  params = [ 'person', 'surveyslot' ]
  filter = [ 'personId', 'surveyslotId' ]
}

export default ParticipantsController;
