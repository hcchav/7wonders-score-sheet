'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('civilian', {
  		url: '/civilian',
    	templateUrl: 'app/civilian/civilian.html',
    	controller: 'CivilianCtrl'
  });
}])

.controller('CivilianCtrl', function CivilianCtrl ($scope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = 'civilian';
});
