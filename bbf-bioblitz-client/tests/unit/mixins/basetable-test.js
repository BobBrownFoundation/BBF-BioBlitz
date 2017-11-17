import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import BasetableMixin from 'bbf-bioblitz/mixins/basetable';

describe('Unit | Mixin | basetable', function() {
  // Replace this with your real tests.
  it('works', function() {
    let BasetableObject = Ember.Object.extend(BasetableMixin);
    let subject = BasetableObject.create();
    expect(subject).to.be.ok;
  });
});
