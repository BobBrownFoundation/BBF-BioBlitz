import { Serializer } from 'lux-framework';

class RolesSerializer extends Serializer {
  attributes = [
    'name',
    'description'
  ]
}

export default RolesSerializer;
