import { Serializer } from 'lux-framework';

class PeopleSerializer extends Serializer {
  attributes = [
    'lastName',
    'firstName'
  ];

  hasMany = [
    'capabilities',
    'participants'
  ];
}

export default PeopleSerializer;
