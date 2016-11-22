'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('military', {
  		url: '/military',
    	templateUrl: 'app/military/military.html',
    	controller: 'MilitaryCtrl'
  });
}])

.controller('MilitaryCtrl', function MilitaryCtrl ($scope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = "military";
});

