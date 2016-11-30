'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('commercial', {
  		url: '/commercial',
    	templateUrl: 'app/commercial/commercial.html',
    	controller: 'CommercialCtrl'
  });
}])

.controller('CommercialCtrl', function CommercialCtrl ($scope, $rootScope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = 'commercial';
	// set theme color
	$rootScope.$emit('themeColor', $scope.backgroundColor);
});
