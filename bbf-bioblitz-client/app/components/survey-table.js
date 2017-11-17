import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/components/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: [],
  layout: BaseTableLayout,
  queryModel: 'survey',
  columns: computed(function() {
    return [{
      label: 'Survey Name',
      valuePath: 'name'
    }, {
      label: 'Description',
      valuePath: 'description'
    }];
  })
});
