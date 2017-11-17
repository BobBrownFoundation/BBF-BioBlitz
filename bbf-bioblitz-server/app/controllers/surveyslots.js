import { Controller } from 'lux-framework';

class SurveyslotsController extends Controller {
  defaultPerPage: number = 999999;
  params = [ 'numberOfParticipants', 'location', 'survey', 'timeslot', 'people' ]
  filter = [ 'surveyId', 'locationId', 'timeslotId' ];
}

export default SurveyslotsController;
