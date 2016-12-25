'use strict';

import angular = require('angular');
import 'angular-ui-router';
import listModule from '../list/list.module';

import searchComponent from './search.component';

let dependencies = ['ui.router', listModule];

export default angular.module('search', dependencies)
    .component('search', searchComponent)
    .name;