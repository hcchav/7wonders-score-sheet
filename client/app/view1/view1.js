'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider 
  	.state('view1', {
  		url: '/',
    	templateUrl: 'app/view1/view1.html',
    	controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function View1Ctrl ($scope, gameService) {
	$scope.players = gameService.getNumberOfPlayers();
});