import { Serializer } from 'lux-framework';

class TimeslotsSerializer extends Serializer {
  attributes = [
    'name',
    'start',
    'duration'
  ]
}

export default TimeslotsSerializer;
