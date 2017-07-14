import { Serializer } from 'lux-framework';

class TeamsSerializer extends Serializer {
  attributes = [
    'name',
    'description'
  ]
}

export default TeamsSerializer;
