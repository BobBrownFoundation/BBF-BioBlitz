import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | surveyslot display', function() {
  setupComponentTest('surveyslot-display', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#surveyslot-display}}
    //     template content
    //   {{/surveyslot-display}}
    // `);

    this.render(hbs`{{surveyslot-display}}`);
    expect(this.$()).to.have.length(1);
  });
});
