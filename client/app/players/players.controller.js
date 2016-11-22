'use strict';

angular.module('myApp')
// , ['ui.router', 'ngTouch', 'ngMaterial']
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('players', {
  		url: '/players',
    	templateUrl: 'app/players/players.html',
    	controller: 'PlayersCtrl'
  });
}])

.controller('PlayersCtrl', function PlayersCtrl ($log, $scope, gameService, $state, $mdDialog) {
	$scope.onSwipeLeft = function(){
		$log.log('swipe left');
		$state.go('military');

	}
	// css
	$scope.backgroundColor = "player-bgc";

	$scope.remove = false;
	// Service Players
	$scope.players = gameService.getPlayers();
	
	

	$log.log($scope.players);

	$scope.addPlayer = function(player){
		
		gameService.addPlayer(player);

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

	// $scope.openModal = function(){
	// 	modalService.openModal();
	// }

	// $scope.closeModal = function (id) {
	// 	modalService.closeModal(id);
	// }
	// Modal
	$scope.showAdvanced = function(ev) {
    	$mdDialog.show({
	    	controller: DialogController,
	    	templateUrl: 'dialog1.tmpl.html',
	    	parent: angular.element(document.body),
	    	targetEvent: ev,
	    	clickOutsideToClose:true,
	    	fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	    })
	    .then(function(newPlayer) {
	    	// $scope.status = 'You said the information was "' + answer + '".';
	    	$scope.addPlayer(newPlayer);
	    }, function() {
	    	$scope.status = 'You cancelled the dialog.';
	    });
  	};

  function DialogController($scope, $mdDialog) {
  	
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

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
		$mdDialog.cancel();
    };

    $scope.addPlayer = function(){
    	var newPlayer = {
			name: $scope.newPlayer.name,
			wonder: $scope.newPlayer.wonder.city
		};

		$mdDialog.hide(newPlayer);

		// $scope.newPlayer.name = "";
		// $scope.newPlayer.wonder = "";
    };
 
  }

})
 .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }]);

