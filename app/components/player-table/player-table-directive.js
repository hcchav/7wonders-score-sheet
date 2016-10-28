	// <player-table>
	// 	<player-columns>
	// 		<player-column title=""></player-column>
	// 		<player-column></player-column>
	// 	</player-columns>
	// 	<player-rows>
	// 		<player-row></player-row>
	// 		<player-row-points></player-row-points>
	// 	</player-rows>
	// </player-table> 

	angular.module("myApp").directive("playerTable", function() {
		return {
			restrict: "A",
			templateUrl: "components/player-table/player-table.html"
		};
	});
	angular.module("myApp").directive("playerColumns", function() {
		return {
			restrict: "A"
		};
	});
	angular.module("myApp").directive("playerColumn", function() {
		return {
			restrict: "A"
		};
	});
	angular.module("myApp").directive("playerRows", function() {
		return {
			restrict: "A"
		};
	});
	angular.module("myApp").directive("playerRow", function() {
		return {
			restrict: "A"
		};
	});
	angular.module("myApp").directive("playerRowPoints", function() {
		return {
			restrict: "A"
		};
	});
