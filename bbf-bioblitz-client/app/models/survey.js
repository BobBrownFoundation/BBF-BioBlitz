import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  //surveyLeader: DS.hasOne('person'),
  //slots: DS.hasMany('survey-slot')
});
