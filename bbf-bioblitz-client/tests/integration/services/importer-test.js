import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Service | importer', function() {
  setupTest('service:importer', {
    needs: ['model:team', 'adapter:application']
  });

const TEAM_CSV = `"Team", "Description"
  "Survey Leaders", "Leads a group of participants in a survey"
  "Organisers", "Part of team that organises BioBlitz event"
  "Volunteers", "General volunteer"`

  // Replace this with your real tests.
  it('import team CSV', function() {
    let service = this.subject();
    return service.import(TEAM_CSV)
      .then( () => expect(service).to.be.ok );
  });
});
