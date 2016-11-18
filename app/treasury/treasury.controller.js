'use strict';

angular.module('myApp.treasury', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('treasury', {
  		url: '/treasury',
    	templateUrl: 'treasury/treasury.html',
    	controller: 'TreasuryCtrl'
  });
}])
.controller('TreasuryCtrl', function TreasuryCtrl($scope, gameService){
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = "treasury";
});