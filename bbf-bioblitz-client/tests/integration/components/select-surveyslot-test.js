import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | select surveyslot', function() {
  setupComponentTest('select-surveyslot', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#select-surveyslot}}
    //     template content
    //   {{/select-surveyslot}}
    // `);

    this.render(hbs`{{select-surveyslot}}`);
    expect(this.$()).to.have.length(1);
  });
});
