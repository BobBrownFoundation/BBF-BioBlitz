import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import CsvModelMapper from 'bbf-bioblitz/utils/csv-model-mapper';

describe('Unit | Utility | csv model mapper', function() {

  const storeStub = Ember.Service.extend({

  });

  const csvModelMapper = CsvModelMapper.create( { store: storeStub });

  /*
  "Participant:Id", "FirstName", "LastName", "Teams", "Capable Roles"
  "1", "Michael", "Sharman", "Organiser", "Volunteer, Kitchen Hand"
  */


  it('simple object works', function() {
    csvModelMapper.convertCsvRowToModel({
        "Team:Name": "Organisers",
        "Description": "Organisation Team"
    }).then( result => {
      expect(result.name).to.equal("Organisers");
      expect(result.description).to.equal("Organisation Team");
    });
  });

  it('default to name if omitted', function() {
    csvModelMapper.convertCsvRowToModel({
        "Team": "Organisers",
        "Description": "Organisation Team"
    }).then( result => {
      expect(result.name).to.equal("Organisers");
      expect(result.description).to.equal("Organisation Team");
    });
  });

  
});
