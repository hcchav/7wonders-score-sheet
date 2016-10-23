'use strict';

angular.module('gameService', [])
	.factory('gameService', function($log){
		$log.log("gameService instatiating....");

		var game = {
			players: [],
			addPlayer: function(player){
				this.players.push(player);
			},
			removePlayer: function(player){

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
