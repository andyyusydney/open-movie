import angular = require('angular');
import 'angular-ui-router';

import routing from './app.routes';

import "./home/home.module";
import "./search/search.module";
import "./list/list.module";
import "./details/details.module";

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

angular.module("app", ["home", "search", "list", "details", "ui.router"])
    .config(routing);
angular.bootstrap(document, ["app"]);