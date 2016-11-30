'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('guilds', {
  		url: '/guilds',
    	templateUrl: 'app/guilds/guilds.html',
    	controller: 'GuildsCtrl'
  });
}])

.controller('GuildsCtrl', function GuildsCtrl ($scope, $rootScope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = "guilds";
	// set theme color
	$rootScope.$emit('themeColor', $scope.backgroundColor);
});
