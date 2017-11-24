import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | person display row', function() {
  setupComponentTest('person-display-row', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#person-display-row}}
    //     template content
    //   {{/person-display-row}}
    // `);

    this.render(hbs`{{person-display-row}}`);
    expect(this.$()).to.have.length(1);
  });
});
