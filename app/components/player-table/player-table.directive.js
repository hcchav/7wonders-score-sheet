'use strict';

// angular.module("myApp.playerTable", [])
//     .directive('playerTable',  function() {
//   return {
//         templateUrl: 'components/player-table/player-table.html'
//   };
// });

	// <player-table dataPlayers="players">
	// 	<player-columns>
	// 		<player-column title="" type=""></player-column>
	// 		<player-column></player-column>
	// 	</player-columns>
	// </player-table> 

	angular.module("playerTable", []).directive("playerTable", function() {
		return {
			restrict: "E",
			scope: {
				players: '='
			},
			controller: function($scope){ 
				// $scope.cols = [{title: "Name", type: "text"}, {title: "Wonder", type: "points"}];// test
				this.setColumns = function(cols){
					$scope.cols = cols;	
				}
			},
			templateUrl: "components/player-table/player-table.html",
			link: function (scope, element, attributes, playerColumnsController) {
				// console.log($scope.cols);
				console.log('player Table linked');
			}
		};
	});
	angular.module("playerColumns",[]).directive("playerColumns", function() {
		return {
			restrict: "E",
			require: ['^playerTable', 'playerColumns'],
			controller: function(){
				var columns = [];
				this.addColumn = function(col){
					columns.push(col);
				};
				this.getColumns = function(){
					return columns;
				};
			},
			link: function(scope, element, attributes, controllers){
				console.log('playerColumns linked');// test
				var playerTableController = controllers[0];
				var playerColumnsController = controllers[1];

				playerTableController.setColumns(playerColumnsController.getColumns());				
				console.log(playerColumnsController.getColumns());
			}
		};
	});
	angular.module("playerColumn", []).directive("playerColumn", function() {
		return {
			restrict: "E",
			require: "^playerColumns",
			link: function(scope, element, attributes, playerColumnsController){
				console.log('playerColumn linked');// test

				playerColumnsController.addColumn({
					title: attributes.title,
					type: attributes.type
				});

			}  
		};
	});
