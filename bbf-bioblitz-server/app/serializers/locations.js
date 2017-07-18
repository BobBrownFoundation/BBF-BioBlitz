import { Serializer } from 'lux-framework';

class LocationsSerializer extends Serializer {
  attributes = [
    'name',
    'description'
  ]
}

export default LocationsSerializer;
