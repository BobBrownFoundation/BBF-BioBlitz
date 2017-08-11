import { Serializer } from 'lux-framework';

class SurveySlotsSerializer extends Serializer {
  attributes = [
    'survey',
    'timeslot',
    'location',
    'numberofparticpants'
  ]
}

export default SurveySlotsSerializer;
