'use strict';

angular.module('myApp.military', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('military', {
  		url: '/military',
    	templateUrl: 'military/military.html',
    	controller: 'MilitaryCtrl'
  });
}])

.controller('MilitaryCtrl', function MilitaryCtrl ($scope, gameService) {
	var players = [{name: 'heron' }, {name: 'kevin'}];
	$scope.players = players;
});

