import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | csv import', function() {
  setupComponentTest('csv-import', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#csv-import}}
    //     template content
    //   {{/csv-import}}
    // `);

    this.render(hbs`{{csv-import}}`);
    expect(this.$()).to.have.length(1);
  });
});
