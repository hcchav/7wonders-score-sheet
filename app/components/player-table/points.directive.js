angular.module("myApp.Points", [])
	.directive("points", function (){
		return {
			scope: {
					
			},
			templateUrl: "components/player-table/points.html",
			controller: function($scope){

			},
			link: function(scope, element, attributes){
				scope.cols = attributes.length
			}
		}
	});