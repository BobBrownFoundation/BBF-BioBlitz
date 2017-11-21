import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | participant list', function() {
  setupComponentTest('participant-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#participant-list}}
    //     template content
    //   {{/participant-list}}
    // `);

    this.render(hbs`{{participant-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
