import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';
import Ember from 'ember';

describe('Unit | Model | team', function() {
  setupModelTest('team', {
    // Specify the other units that are required for this test.
      needs: ['adapter:application']
  });

  // Replace this with your real tests.
  it('persists', function() {
    let team = this.subject({
        name: 'Test Team 1',
        description: 'Test Description 1'
    });
    return team.save()
      .then( () => this.store().findRecord('team', team.get('id') ) )
      .then( team2 => {
          expect(team2.get('id')).to.equal(team.get('id'));
          expect(team2.get('name')).to.equal(team.get('name'));
          expect(team2.get('description')).to.equal(team.get('description'));
        });
  });
});
