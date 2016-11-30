'use strict';

angular.module('myApp')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('treasury', {
  		url: '/treasury',
    	templateUrl: 'app/treasury/treasury.html',
    	controller: 'TreasuryCtrl'
  });
}])
.controller('TreasuryCtrl', function TreasuryCtrl($scope, $rootScope, gameService){
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = "treasury";
	// set theme color
	$rootScope.$emit('themeColor', $scope.backgroundColor);
});