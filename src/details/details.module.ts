'use strict';

import angular = require('angular');
import 'angular-ui-router';

import detailsComponent from './details.component';
import routing from './details.routes';
import {DetailsService} from '../services/details.service';

let dependencies = ['ui.router'];

export default angular.module('details', dependencies)
    .component('itemDetails', detailsComponent)
    .service('detailsService', DetailsService)
    .config(routing)
    .name;
    