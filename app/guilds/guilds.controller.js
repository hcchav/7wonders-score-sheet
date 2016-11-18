'use strict';

angular.module('myApp.guilds', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('guilds', {
  		url: '/guilds',
    	templateUrl: 'guilds/guilds.html',
    	controller: 'GuildsCtrl'
  });
}])

.controller('GuildsCtrl', function GuildsCtrl ($scope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = "guilds";
});
