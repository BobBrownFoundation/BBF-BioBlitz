import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | select participant', function() {
  setupComponentTest('select-participant', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#select-participant}}
    //     template content
    //   {{/select-participant}}
    // `);

    this.render(hbs`{{select-participant}}`);
    expect(this.$()).to.have.length(1);
  });
});
