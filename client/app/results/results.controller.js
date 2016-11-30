'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('results', {
  		url: '/results',
    	templateUrl: 'app/results/results.html',
    	controller: 'ResultsCtrl'
  });
}])
.controller('ResultsCtrl', function ResultsCtrl($scope, $rootScope, gameService){
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = "results";
	// set theme color
	$rootScope.$emit('themeColor', $scope.backgroundColor);
});