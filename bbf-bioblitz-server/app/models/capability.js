import { Model } from 'lux-framework';

class Capability extends Model {
  static belongsTo = {
      capability: {
        inverse: 'people'
      },
      person: {
        inverse: 'capabilities'
      }
    }
}

export default Capability;
