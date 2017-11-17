import { Serializer } from 'lux-framework';

class SurveysSerializer extends Serializer {
  attributes = [
    'name',
    'description'
  ]

  hasMany = [
    'surveyslots'
  ];
}

export default SurveysSerializer;
