import DS from 'ember-data';

export default DS.Model.extend({
  person: DS.belongsTo('person'),
  surveyslot: DS.belongsTo('surveyslot')
});
