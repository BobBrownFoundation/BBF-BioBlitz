import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/components/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: null,
  layout: BaseTableLayout,
  queryModel: 'person',
  queryIdPath: 'person.id',
  columns: computed(function() {
    return [{
      label: 'Participant',
      valuePath: 'person.name',
      cellComponent: 'person-with-remove'
    }];
  })
});
