import { Serializer } from 'lux-framework';

class SurveysSerializer extends Serializer {
  attributes = [
    'name',
    'description'
  ]
}

export default SurveysSerializer;
