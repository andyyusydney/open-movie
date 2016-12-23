'use strict';

import angular = require('angular');
import 'angular-ui-router';

import listComponent from './list.component';
import routing from './list.routes';

let dependencies = ['ui.router'];

export default angular.module('list', dependencies)
    .component('list', listComponent)
    .config(routing)
    .name;
    