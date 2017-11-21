import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | participant surveyslot table', function() {
  setupComponentTest('participant-surveyslot-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#participant-surveyslot-table}}
    //     template content
    //   {{/participant-surveyslot-table}}
    // `);

    this.render(hbs`{{participant-surveyslot-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
