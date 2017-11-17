import Ember from 'ember';

import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import Table from 'ember-light-table';
import { task } from 'ember-concurrency';

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

  // Sort Logic
  sortedModel: computed.sort('model', 'sortBy'),
  sortBy: computed('dir', 'sort', function() {
    return [`${this.get('sort')}:${this.get('dir')}`];
  }),

  init() {
    this._super(...arguments);

    let table = new Table(this.get('columns'), this.get('sortedModel'), { enableSync: true });
    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    this.set('table', table);
  },

/*  fetchRecords: task(function*() {
    let query = {
      'page[number]': this.get('page'),
      'page[size]': this.get('limit')
    };
    if ( this.get('sort') ) {
      query['sort'] = (this.get('dir') === 'desc' ? '-' : '' ) + this.get('sort');
    }
    let records = yield this.get('store').query( this.get('queryModel'), query );
    this.get('model').pushObjects(records.toArray());
    this.set('meta', records.get('meta'));
    this.set('canLoadMore', !isEmpty(records));
  }).restartable(),*/

  actions: {
    onRowClicked(row) {
      if ( this.get('canSelect') ) {
        this.get('router').transitionTo(this.get('queryModel'), row.content.get('id') );
      }
    },

  /*  onScrolledToBottom() {
      if (this.get('canLoadMore')) {
        this.incrementProperty('page');
        this.get('fetchRecords').perform();
      }
    },*/

    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          sort: column.get('valuePath')
        });

        this.get('table').setRows(this.get('sortedModel'));
      }
    }
  }
});
