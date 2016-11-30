'use strict';

angular.module('myApp')
  .controller('NavbarCtrl',  function NavbarCtrl($scope, $rootScope, $location) {
    // default player color theme color
    $scope.themeColor = 'player-bgc';

    // events
    $rootScope.$on('themeColor', function (event, themeColor) {
      $scope.themeColor = themeColor; 
    });

    $scope.isActive = function(route) {
      return route === $location.path();
    };
});