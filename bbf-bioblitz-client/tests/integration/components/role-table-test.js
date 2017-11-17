import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | role table', function() {
  setupComponentTest('role-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#role-table}}
    //     template content
    //   {{/role-table}}
    // `);

    this.render(hbs`{{role-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
