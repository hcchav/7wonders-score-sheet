'use strict';

angular.module('myApp.commercial', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('commercial', {
  		url: '/commercial',
    	templateUrl: 'commercial/commercial.html',
    	controller: 'CommercialCtrl'
  });
}])

.controller('CommercialCtrl', function CommercialCtrl ($scope, gameService) {
	$scope.players = gameService.getPlayers();
});
