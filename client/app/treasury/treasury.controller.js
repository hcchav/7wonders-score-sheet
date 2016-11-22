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
.controller('TreasuryCtrl', function TreasuryCtrl($scope, gameService){
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = "treasury";
});