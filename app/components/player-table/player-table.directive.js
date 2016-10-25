'use strict';

angular.module("myApp.playerTable", [])
    .directive('playerTable',  function() {
  return {
        templateUrl: 'components/player-table/player-table.html'
  };
});