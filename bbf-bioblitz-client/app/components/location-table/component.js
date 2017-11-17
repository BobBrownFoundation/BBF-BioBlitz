import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: [],
  queryModel: 'location',
  columns: computed(function() {
    return [{
      label: 'Location Name',
      valuePath: 'name'
    }, {
      label: 'Description',
      valuePath: 'description'
    }];
  })
});
