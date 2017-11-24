import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/components/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: [],
  layout: BaseTableLayout,
  queryModel: 'person',
  queryIdPath: 'person.id',
  columns: computed(function() {
    return [{
      label: 'Name',
      valuePath: 'person.name',
      cellComponent: 'person-display-row'
    }, {
      label: 'Site',
      valuePath: 'surveyslot.location.name'
    },
    {
      label: 'Survey',
      valuePath: 'surveyslot.survey.name'
    },
     {
      label: 'Time Slot',
      valuePath: 'surveyslot.timeslot.name'
    }];
  })
});
