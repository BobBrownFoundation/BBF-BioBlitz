import { Serializer } from 'lux-framework';

class SurveyslotsSerializer extends Serializer {
  attributes = [
    'numberOfParticipants'
  ];

  hasOne = [
    'survey',
    'timeslot',
    'location',
  ];

  hasMany = [ 'participants' ];
}

export default SurveyslotsSerializer;
