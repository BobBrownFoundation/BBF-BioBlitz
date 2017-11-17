import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | participant person table', function() {
  setupComponentTest('participant-person-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#participant-person-table}}
    //     template content
    //   {{/participant-person-table}}
    // `);

    this.render(hbs`{{participant-person-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
