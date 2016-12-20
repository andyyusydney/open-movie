'use strict';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('404', {
      url: '/404',
      template: '<h1>404</h1>'
    });
}