'use strict';

import angular = require('angular');
import 'angular-ui-router';

import searchComponent from './search.component';
import routing from './search.routes';

let dependencies = ['ui.router'];

export default angular.module('search', dependencies)
    .component('search', searchComponent)
    .config(routing)
    .name;