import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';
import Ember from 'ember';

setResolver(resolver);

if (window.location.search.indexOf('nocontainer') > -1) {
    Ember.$('#ember-testing-container').css({
        visibility: 'hidden'
    });
}
