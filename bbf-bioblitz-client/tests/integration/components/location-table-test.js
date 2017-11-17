import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | location table', function() {
  setupComponentTest('location-table', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#location-table}}
    //     template content
    //   {{/location-table}}
    // `);

    this.render(hbs`{{location-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
