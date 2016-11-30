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

.controller('CivilianCtrl', function CivilianCtrl ($scope, $rootScope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = 'civilian';
	// set theme color
	$rootScope.$emit('themeColor', $scope.backgroundColor);
});
