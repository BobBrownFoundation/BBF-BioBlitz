import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Service | importer', function() {
  setupTest('service:importer', {
    needs: ['model:team', 'model:timeslot', 'adapter:application', 'service:model-mapper']
  });

  it('imports team CSV', function() {
    let service = this.subject();
    return service.import(`"Team", "Description"
      "Survey Leaders", "Leads a group of participants in a survey"
      "Organisers", "Part of team that organises BioBlitz event"
      "Volunteers", "General volunteer"`)
      .then( () => service.get('store').findAll('team'))
      .then( (items) => {
        expect( items.get('length') ).to.equal(3);
        expect( items.objectAt(0).get('name') ).to.equal('Survey Leaders');
        expect( items.objectAt(0).get('description') ).to.equal('Leads a group of participants in a survey');
        expect( items.objectAt(1).get('name') ).to.equal('Organisers');
        expect( items.objectAt(1).get('description') ).to.equal('Part of team that organises BioBlitz event');
        expect( items.objectAt(2).get('name') ).to.equal('Volunteers');
        expect( items.objectAt(2).get('description') ).to.equal('General volunteer');
      });
  });


});
