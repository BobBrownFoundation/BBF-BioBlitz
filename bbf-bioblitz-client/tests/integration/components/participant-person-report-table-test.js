import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | participant person report table', function() {
  setupComponentTest('participant-person-report-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#participant-person-report-table}}
    //     template content
    //   {{/participant-person-report-table}}
    // `);

    this.render(hbs`{{participant-person-report-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
