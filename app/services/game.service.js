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
					gear: 2,
					tablet: 3,
					compass: 0,
					getScienceTotal: function(){
						
						var gearIdenticalPoints = this.getIdenticalCardPoints(this.gear);
						var tabletIdenticalPoints = this.getIdenticalCardPoints(this.tablet);
						var compassIdenticalPoints = this.getIdenticalCardPoints(this.compass);
						var groupSetPoints = this.getGroupSetPoints();

						var TotalSum = gearIdenticalPoints + tabletIdenticalPoints + compassIdenticalPoints + groupSetPoints;

						return TotalSum;							

					},
					getIdenticalCardPoints: function (numberOfScienceCards){
						return Math.pow(numberOfScienceCards, 2);
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

		


		return game;
		

	});
