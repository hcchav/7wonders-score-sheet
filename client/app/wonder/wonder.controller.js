'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('wonder', {
  		url: '/wonder',
    	templateUrl: 'app/wonder/wonder.html',
    	controller: 'WonderCtrl'
  });
}])

.controller('WonderCtrl', function WonderCtrl ($scope, $rootScope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = 'wonder';
	// set theme color
	$rootScope.$emit('themeColor', $scope.backgroundColor);
});
