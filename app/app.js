'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStoreApp', [
  'ngRoute',
  'templateStoreApp.view1',
  'templateStoreApp.view2',
  'templateStoreApp.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
