'use strict';

angular.module('myApp.stage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stage', {
    templateUrl: 'stage/stage.html',
    controller: 'stageCtrl'
  });
}])

.controller('stageCtrl', [function() {

}]);