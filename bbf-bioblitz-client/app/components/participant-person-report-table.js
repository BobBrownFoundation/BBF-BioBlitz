import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/components/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: null,
  sort: 'person.name',
  layout: BaseTableLayout,
  queryModel: 'person',
  queryIdPath: 'person.id',
  columns: computed(function() {
    return [{
      label: 'Participant',
      valuePath: 'person.name',
      cellComponent: 'person-display-row',
      width: '14em',
    },{
      label: 'Survey',
      valuePath: 'surveyslot.survey.name',
      cellComponent: 'surveyslot-display-row'
    },{
      label: 'Leaving Basecamp',
      width: '4em',
    },{
      label: 'Leaving Site',
      width: '4em'
    }];
  })
});
