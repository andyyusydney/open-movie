'use strict';

import angular = require('angular');
import 'angular-ui-router';

import cardComponent from './card.component';

let dependencies = ['ui.router'];

export default angular.module('card', dependencies)
    .component('card', cardComponent)
    .name;