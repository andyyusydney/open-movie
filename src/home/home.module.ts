'use strict';

import angular = require('angular');
import 'angular-ui-router';

import homeComponent from './home.component';
import routing from './home.routes';
import './home.scss';

let dependencies = ['ui.router'];

export default angular.module('home', dependencies)
    .component('home', homeComponent)
    .config(routing)
    .name;
    