import { Serializer } from 'lux-framework';

class ParticipantsSerializer extends Serializer {
  attributes = [
    'lastName',
    'firstName'
  ]
}

export default ParticipantsSerializer;
