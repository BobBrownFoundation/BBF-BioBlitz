import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | survey table', function() {
  setupComponentTest('survey-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#survey-table}}
    //     template content
    //   {{/survey-table}}
    // `);

    this.render(hbs`{{survey-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
