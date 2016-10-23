'use strict';

angular.module('myApp.players', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('players', {
  		url: '/players',
    	templateUrl: 'players/players.html',
    	controller: 'PlayersCtrl'
  });
}])

.controller('PlayersCtrl', function PlayersCtrl ($scope, gameService) {
	$scope.players = 7;
});