import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/basetable'
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: [],
  layout: BaseTableLayout,
  queryModel: 'timeslot',
  columns: computed(function() {
    return [{
      label: 'Time Slot Name',
      valuePath: 'name'
    }, {
      label: 'Start',
      valuePath: 'start'
    }, {
      label: 'Duration',
      valuePath: 'duration'
    }];
  })
});
