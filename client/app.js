'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngCookies',
  'ngResource',
  'ngMaterial',
  'ngTouch'
]).
config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'
        , function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  // $locationProvider.hashPrefix('!');


  $urlRouterProvider
      .otherwise('/players');

    $locationProvider.html5Mode(true);      
    $httpProvider.interceptors.push('interceptor');

}])
  .factory('interceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/');
          // remove any stale tokens
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  });





  // 'myApp.view1',
  // 'myApp.view2',
  // 'myApp.version',
  // 'myApp.players',
  // 'myApp.military',
  // 'myApp.treasury',
  // 'myApp.civilian',
  // 'myApp.commercial',
  // 'myApp.guilds',
  // 'myApp.science',
  // 'myApp.wonder',
  // 'myApp.playerTable',
  // 'myApp.results',
  // 'gameService',