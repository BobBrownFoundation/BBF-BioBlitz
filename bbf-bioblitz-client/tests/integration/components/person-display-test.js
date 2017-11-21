import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | person display', function() {
  setupComponentTest('person-display', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#person-display}}
    //     template content
    //   {{/person-display}}
    // `);

    this.render(hbs`{{person-display}}`);
    expect(this.$()).to.have.length(1);
  });
});
