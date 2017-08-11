import { expect } from 'chai';
import { describe, it } from 'mocha';
import csvModelMapper from 'bbf-bioblitz/utils/csv-model-mapper';

describe('Unit | Utility | csv model mapper', function() {
  /*
  "Participant:Id", "FirstName", "LastName", "Teams", "Capable Roles"
  "1", "Michael", "Sharman", "Organiser", "Volunteer, Kitchen Hand"
  */
  it('works', function() {
    let result = csvModelMapper();
    expect(result).to.be.ok;
  });
});
