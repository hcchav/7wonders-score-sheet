'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.players',
  'myApp.military',
  'myApp.treasury',
  'myApp.playerTable',
  'myApp.results',
  'gameService',
  'ngMaterial'
]).
config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/view1');
}]);
