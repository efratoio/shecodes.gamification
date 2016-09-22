'use strict';

angular.module('myApp.milestones', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/milestones', {
    templateUrl: 'milestones/milestones.html',
    controller: 'milestonesCtrl'
  });
}])

.controller('milestonesCtrl', [function() {

}]);