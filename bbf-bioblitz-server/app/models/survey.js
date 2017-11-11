import { Model } from 'lux-framework';

class Survey extends Model {
  static hasMany = {
      surveyslots: {
        inverse: 'survey'
      }
    }
}

export default Survey;
