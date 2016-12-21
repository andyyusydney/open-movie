'use strict';

import angular = require('angular');
import 'angular-ui-router';

import searchComponent from './search.component';
import routing from './search.routes';
import {SearchService} from './search.service';

let dependencies = ['ui.router'];

export default angular.module('search', dependencies)
    .component('search', searchComponent)
    .service('searchService', SearchService)
    .config(routing)
    .name;
    