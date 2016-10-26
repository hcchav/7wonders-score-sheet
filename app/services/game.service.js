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
				this.players.splice(this.players.indexOf(player), 1);
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
				commercial: 0,
				science: {
					gear: 0,
					tablet: 0,
					compass: 0,
					getScienceTotal: function(){
						// find minimun science points
						var gearIdenticalPoints = this.getIdenticalPoints(this.gear);
						var tabletIdenticalPoints = this.getIdenticalPoints(this.tablet);
						var compassIdenticalPoints = this.getIdenticalPoints(this.compass);
						var groupSetPoints = this.getGroupSetPoints();

						var TotalSum = gearIdenticalPoints + tabletIdenticalPoints + compassIdenticalPoints + groupSetPoints;

						return TotalSum;							


					},
					getIdenticalPoints: function (numberOfScienceCards){
						return Math.pow(numberOfScienceCards.length, 2);
					},
					getGroupSetPoints:  function() {
						if(this.gear === 0 || this.tablet === 0 || this.compass === 0){
							return 0;
						}
						else {
							return 7 * Math.min(this.gear,this.tablet,this.compass);
						}
					}
				}
			}
		};

		player.points.science.getScienceTotal();


		return game;
		

	});
