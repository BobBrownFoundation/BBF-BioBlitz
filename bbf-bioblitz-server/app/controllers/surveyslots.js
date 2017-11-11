import { Controller } from 'lux-framework';

class SurveyslotsController extends Controller {
  params = [ 'numberOfParticipants', 'location', 'survey', 'timeslot', 'people' ]
  filter = [ 'surveyId', 'locationId', 'timeslotId' ];
}

export default SurveyslotsController;
