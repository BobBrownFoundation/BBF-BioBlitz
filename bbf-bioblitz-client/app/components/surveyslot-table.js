import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/components/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: [],
  layout: BaseTableLayout,
  queryModel: 'surveyslot',
  columns: computed(function() {
    return [{
      label: 'Survey Name',
      valuePath: 'survey.name',
      width: '350px'
    },{
      label: 'Site Name',
      valuePath: 'location.name'
    }, {
      label: 'Timeslot',
      valuePath: 'timeslot.name',
      sortValuePath: 'timeslot.start'
    },{
      label: 'Avaiable Slots',
      valuePath: 'availableSlots'
    }
    ];
  })
});
