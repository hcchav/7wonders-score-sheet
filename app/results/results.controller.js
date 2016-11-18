'use strict';

angular.module('myApp.results', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('results', {
  		url: '/results',
    	templateUrl: 'results/results.html',
    	controller: 'ResultsCtrl'
  });
}])
.controller('ResultsCtrl', function ResultsCtrl($scope, gameService){
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = "results";
});