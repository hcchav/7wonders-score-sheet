'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('commercial', {
  		url: '/commercial',
    	templateUrl: 'app/commercial/commercial.html',
    	controller: 'CommercialCtrl'
  });
}])

.controller('CommercialCtrl', function CommercialCtrl ($scope, gameService) {
	$scope.players = gameService.getPlayers();
	$scope.backgroundColor = 'commercial';
});
