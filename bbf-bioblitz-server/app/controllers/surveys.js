import { Controller } from 'lux-framework';

class SurveysController extends Controller {
  defaultPerPage: number = 999999;
  params = [
      'name',
      'description'
    ];
}

export default SurveysController;
