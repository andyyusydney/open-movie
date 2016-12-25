'use strict';

import angular = require('angular');
import 'angular-ui-router';

import searchResultsComponent from './searchResults.component';
import routing from './searchResults.routes';
import {SearchService} from '../services/search.service';

let dependencies = ['ui.router'];

export default angular.module('searchResults', dependencies)
    .component('searchResults', searchResultsComponent)
    .service('searchService', SearchService)
    .config(routing)
    .name;
    