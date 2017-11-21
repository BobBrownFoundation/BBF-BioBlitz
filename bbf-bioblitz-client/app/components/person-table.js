import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/components/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: [],
  layout: BaseTableLayout,
  queryModel: 'person',
  columns: computed(function() {
    return [{
      label: 'First Name',
      valuePath: 'firstName'
    }, {
      label: 'Last Name',
      valuePath: 'lastName'
    }, {
      label: 'Team',
      valuePath: 'team.name',
      cellComponent: 'team-display'
    }];
  })
});
