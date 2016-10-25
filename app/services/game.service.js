'use strict';

angular.module('gameService', [])
	.factory('gameService', function($log){
		$log.log("gameService instatiating....");

		var game = {

			players: [],

			addPlayer: function (newPlayer){
				this.players.push(newPlayer);
			},
			removePlayer: function(player){

			},
			getPlayers: function(){
				return this.players;
			},
			getNumberOfPlayers: function(){
				return this.players.length;
			}
		};

		

		var player = {
			name: '',
			wonder: '',
			points: {
				treasury: 0,
				commercial: 0
			}
		};

		return game;
		

	});
