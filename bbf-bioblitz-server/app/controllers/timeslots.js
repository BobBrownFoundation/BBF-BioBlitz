import { Controller } from 'lux-framework';

class TimeslotsController extends Controller {
  defaultPerPage: number = 999999;
  params = [
      'name',
      'start',
      'duration'
    ];
}

export default TimeslotsController;
