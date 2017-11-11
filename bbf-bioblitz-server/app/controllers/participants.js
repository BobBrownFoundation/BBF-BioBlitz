import { Controller } from 'lux-framework';

class ParticipantsController extends Controller {
  params = [ 'person', 'surveyslot' ]
  filter = [ 'personId', 'surveyslotId' ]
}

export default ParticipantsController;
