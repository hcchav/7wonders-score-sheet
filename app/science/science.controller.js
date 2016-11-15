'use strict';

angular.module('myApp.science', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('science', {
  		url: '/science',
    	templateUrl: 'science/science.html',
    	controller: 'ScienceCtrl'
  });
}])

.controller('ScienceCtrl', function ScienceCtrl ($scope, gameService) {
	$scope.players = gameService.getPlayers();
});
