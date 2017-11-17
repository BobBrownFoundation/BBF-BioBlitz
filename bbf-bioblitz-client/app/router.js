import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('import');
  this.route('locations');
  this.route('roles');
  this.route('surveys');
  this.route('teams');
  this.route('timeslots');
});

export default Router;
