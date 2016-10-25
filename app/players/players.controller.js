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

.controller('PlayersCtrl', function PlayersCtrl ($log, $scope, gameService) {

	// Service Players
	$scope.players = gameService.getPlayers();
	
	// New Player
	$scope.wonders = [
		{ city: "Alexandria" },
		{ city: "Rhodes" },
		{ city: "Epheses" },
		{ city: "Babylon" },
		{ city: "Olympia" },
		{ city: "Halicarnassus" },
		{ city: "Gizah" }
	];

	$scope.newPlayer = {
		name: "",
		wonder: ""
	};

	$log.log($scope.players);

	$scope.addPlayer = function(){
		var newPlayer = {
			name: $scope.newPlayer.name,
			wonder: $scope.newPlayer.wonder
		}
		gameService.addPlayer(newPlayer);
		
		$scope.newPlayer.name = "";
		$scope.newPlayer.wonder = "";
	};

	$scope.removePlayer = function(player){
		gameService.removePlayer(player);
	};	

	$scope.update = function(player){
		gameService.update();
	}

	$scope.openModal = function(){
		modalService.openModal();
	}

	$scope.closeModal = function (id) {
		modalService.closeModal(id);
	}

});

