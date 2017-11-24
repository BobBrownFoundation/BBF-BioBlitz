import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | surveyslot display row', function() {
  setupComponentTest('surveyslot-display-row', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#surveyslot-display-row}}
    //     template content
    //   {{/surveyslot-display-row}}
    // `);

    this.render(hbs`{{surveyslot-display-row}}`);
    expect(this.$()).to.have.length(1);
  });
});
