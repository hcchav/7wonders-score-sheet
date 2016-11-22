angular.module('myApp')
.directive('playerTable', function(){
	return {
		restrict: 'E',
		controller: function($scope){
			this.setColumns = function(cols){
				$scope.cols = cols;
			};	
		},
		link: function(){
			console.log('playerTable link');
		},

	};
})
.directive('playerColumns', function(){
	return {
		restrict: 'E',
		require: ['^playerTable', 'playerColumns'],
		controller: function(){
			var columns = [];
			this.addColumn = function (col) {
				columns.push(col);
			};
			this.getColumns = function(){
				return columns;
			};
		},
		link: function(scope, element, attributes, controllers){
			console.log('player columns link');
			var playerTableController = controllers[0];
			var playerColumnsController = controllers[1];

			playerTableController.setColumns(playerColumnsController.getColumns());
		}
	}
})
.directive('playerColumn', function(){
	return {
		restrict: 'E',
		require: '^playerColumns',
		controller: function () {
			
		},
		link: function(scope, element, attributes, playerColumnsController){
			console.log('player column link');
			playerColumnsController.addColumn({
				title: attributes.title,
				type: attributes.type
			});

		}
	}
})
.directive('playerGrid',function () {
	return {
		restrict: 'E',
		link: function(){

		},
		templateUrl: 'components/player-table/player-table.html'	
	};
});