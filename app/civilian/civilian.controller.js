'use strict';

angular.module('myApp.civilian', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('civilian', {
  		url: '/civilian',
    	templateUrl: 'civilian/civilian.html',
    	controller: 'CivilianCtrl'
  });
}])

.controller('CivilianCtrl', function CivilianCtrl ($scope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = 'civilian';
});
