import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | surveyslot list', function() {
  setupComponentTest('surveyslot-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#surveyslot-list}}
    //     template content
    //   {{/surveyslot-list}}
    // `);

    this.render(hbs`{{surveyslot-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
