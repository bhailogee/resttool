'use strict';

// Declare app level module which depends on views, and components
angular.module('rt', [
  'ngRoute',
  'rt.view1',
  'rt.view2',
    'rt.routes',
  'rt.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
