import { Serializer } from 'lux-framework';

class CapabilitySerializer extends Serializer {
  hasOne = [
    'role',
    'person'
  ];
}

export default CapabilitySerializer;
