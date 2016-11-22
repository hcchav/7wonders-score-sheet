'use strict';

angular.module('myApp')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  	.state('view2', {
  		url: '/view2',
	    templateUrl: 'app/view2/view2.html',
	    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);