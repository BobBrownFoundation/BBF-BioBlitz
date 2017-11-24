import Ember from 'ember';

export function plusone(params/*, hash*/) {
  return parseInt(params)+1;
}

export default Ember.Helper.helper(plusone);
