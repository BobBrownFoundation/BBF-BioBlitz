import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('import');
  this.route('roles');
  this.route('surveys');
  this.route('teams');
  this.route('timeslots');
  this.route('people');
  this.route('participants');
  this.route('surveyslots');
  this.route('sites');
  this.route('survey', { path: '/survey/:survey_id'});
});

export default Router;
