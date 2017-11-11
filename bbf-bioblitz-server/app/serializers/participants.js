import { Serializer } from 'lux-framework';

class ParticipantsSerializer extends Serializer {
  hasOne = [
    'surveyslot',
    'person'
  ];
}

export default ParticipantsSerializer;
