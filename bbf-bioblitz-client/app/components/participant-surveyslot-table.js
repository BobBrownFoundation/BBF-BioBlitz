import Component from '@ember/component';
import BaseTable from 'bbf-bioblitz/mixins/basetable';
import BaseTableLayout from 'bbf-bioblitz/templates/components/basetable';
import { computed } from '@ember/object';

export default Component.extend(BaseTable, {
  model: [],
  layout: BaseTableLayout,
  queryModel: 'surveyslot',
  queryIdPath: 'surveyslot.id',
  columns: computed(function() {
    return [
      {
         label: 'Site',
         valuePath: 'surveyslot.location.name'
       },
       {
        label: 'Time Slot',
        valuePath: 'surveyslot.timeslot.name'
      },
    {
      label: 'Survey',
      valuePath: 'surveyslot.survey.name',
      width: '25em',
      cellComponent: 'survey-with-remove'
    },
     ];
  })
});
