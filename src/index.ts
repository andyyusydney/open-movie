import angular = require('angular');
import 'angular-ui-router';

import routing from './app.routes';

/*
import "./search/search.module";
import "./list/list.module";
import "./details/details.module";
*/

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

//angular.module("app", ["search", "list", "details", "ui.router"])
angular.module("app", ["ui.router"])
    .config(routing);
angular.bootstrap(document, ["app"]);