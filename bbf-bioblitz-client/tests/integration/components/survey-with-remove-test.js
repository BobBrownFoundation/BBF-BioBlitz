import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | survey with remove', function() {
  setupComponentTest('survey-with-remove', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#survey-with-remove}}
    //     template content
    //   {{/survey-with-remove}}
    // `);

    this.render(hbs`{{survey-with-remove}}`);
    expect(this.$()).to.have.length(1);
  });
});
