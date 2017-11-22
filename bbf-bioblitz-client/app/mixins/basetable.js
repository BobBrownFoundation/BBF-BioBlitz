import Ember from 'ember';

import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

import Table from 'ember-light-table';


export default Mixin.create({
  store: Ember.inject.service(),

  dir: 'asc',
  sort: null,

  model: null,
  meta: null,
  columns: null,
  table: null,

  height: '50vh',
  canSelect: false,

  queryModel: null,
  queryIdPath: 'id',

  // Sort Logic
  sortedModel: computed.sort('model', 'sortBy'),
  sortBy: computed('dir', 'sort', function() {
    return [`${this.get('sort')}:${this.get('dir')}`];
  }),

  init() {
    this._super(...arguments);

    let table = new Table(this.get('columns'), this.get('sortedModel'), { enableSync: false });
    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    this.set('table', table);
  },

  updateTable: Ember.observer('sortedModel', function() {
      this.get('table').setRows(this.get('sortedModel'));
    }),


  actions: {
    onRowClicked(row) {
      if ( this.get('canSelect') ) {
        this.get('router').transitionTo(this.get('queryModel'), row.content.get( this.get('queryIdPath') ) );
      }
    },

    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          sort: column.get('valuePath')
        });
      }
    }
  }
});
