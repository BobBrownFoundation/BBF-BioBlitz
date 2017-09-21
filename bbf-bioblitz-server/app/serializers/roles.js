import { Serializer } from 'lux-framework';

class RolesSerializer extends Serializer {
  attributes = [
    'name',
    'description'
  ];

  hasMany = [
    'people'
  ];
}

export default RolesSerializer;
