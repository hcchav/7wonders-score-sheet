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
				
				$scope.cols = [{title: "Name", type: "text"}, {title: "Wonder", type: "wonder"}];
			},
			templateUrl: "components/player-table/player-table.html",
			link: function (scope, element, attributes) {
				console.log(scope);
				console.log('playerTable directive');
					
			}
		};
	});
	angular.module("playerColumns",[]).directive("playerColumns", function() {
		return {
			restrict: "E",
			controller: function(){
				var columns = [];
				this.addColumn = function(col){
					columns.push(col);
				};
				this.getColumns = function(){
					return columns;
				};
			},
			link: function(scope, element, attributes){
				console.log('playerColumns directive');
				

			}
		};
	});
	angular.module("playerColumn", []).directive("playerColumn", function() {
		return {
			restrict: "E",
			require: "^playerColumns",
			link: function(scope, element, attributes, playerColumnsController){
				console.log('playerColumn directive');

				playerColumnsController.addColumn({
					title: attributes.title,
					field: attributes.field
				});

			}  
		};
	});
