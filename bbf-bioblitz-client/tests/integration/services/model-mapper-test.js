import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Service | model-mapper', function() {
  setupTest('service:model-mapper', {
    needs: ['model:team', 'model:timeslot', 'model:survey-slot', 'model:survey', 'adapter:application']
  });

  it('simple object works', function() {
    let modelMapper = this.subject();
    return modelMapper.mapFieldsToModel({
        "Team:Name": "Organisers",
        "Description": "Organisation Team"
    }).then( result => {
      expect(result.props.name).to.equal("Organisers");
      expect(result.props.description).to.equal("Organisation Team");
    });
  });

  it('defaults to name if omitted', function() {
    let modelMapper = this.subject();
    return modelMapper.mapFieldsToModel({
        "Team": "Organisers",
        "Description": "Organisation Team"
    }).then( result => {
      expect(result.props.name).to.equal("Organisers");
      expect(result.props.description).to.equal("Organisation Team");
    });
  });

  it('parses date strings into Date() objects', function() {
    let modelMapper = this.subject();
    return modelMapper.mapFieldsToModel({
        "Timeslot": "Friday AM",
        "Start": "2017-10-07T09:00:00Z",
        "Duration": "180"})
      .then( result => {
        expect( result.props.start.getTime() ).to.equal( new Date("2017-10-07T09:00:00Z").getTime() );
      });
  });

  it('dereferences satellite objects', function() {
    let modelMapper = this.subject();
    return modelMapper.mapFieldsToModel({
        "SurveySlot:id": 1,
        "Survey:name": "Test Survey" })
      .then( result => {
        expect( result.props.start.getTime() ).to.equal( new Date("2017-10-07T09:00:00Z").getTime() );
      });
  });

});
