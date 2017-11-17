import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | people table', function() {
  setupComponentTest('people-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#people-table}}
    //     template content
    //   {{/people-table}}
    // `);

    this.render(hbs`{{people-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
