'use strict';

angular.module('myApp.players', ['ui.router', 'ngTouch', 'ngMaterial'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('players', {
  		url: '/players',
    	templateUrl: 'players/players.html',
    	controller: 'PlayersCtrl'
  });
}])

.controller('PlayersCtrl', function PlayersCtrl ($log, $scope, gameService, $state) {
	$scope.onSwipeLeft = function(){
		$log.log('swipe left');
		$state.go('military');

	}
	// css
	$scope.backgroundColor = "player-bgc";

	$scope.remove = false;
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
			wonder: $scope.newPlayer.wonder.city
		}
		gameService.addPlayer(newPlayer);

		$scope.newPlayer.name = "";
		$scope.newPlayer.wonder = "";
	};

	$scope.edit = function(){
		$scope.remove = !$scope.remove;
	}

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

})
 .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }]);

