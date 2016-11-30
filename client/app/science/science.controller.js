'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('science', {
  		url: '/science',
    	templateUrl: 'app/science/science.html',
    	controller: 'ScienceCtrl'
  });
}])

.controller('ScienceCtrl', function ScienceCtrl ($scope, $rootScope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = 'science';
	// set theme color
	$rootScope.$emit('themeColor', $scope.backgroundColor);
});
