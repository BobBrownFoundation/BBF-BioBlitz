import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/components/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: [],
  layout: BaseTableLayout,
  queryModel: 'participant',
  columns: computed(function() {
    return [{
      label: 'Name',
      valuePath: 'person.name'
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
