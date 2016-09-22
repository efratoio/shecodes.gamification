'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.milestones',
  'myApp.stage',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/milestones'});
}]);
myApp.controller('main', function($http) {
  var ctrl = this;
  ctrl.stages = [
      {
          name: 'Creative Logo',
          keyword: 'logo',
          snippet: ''
      },
      {
          name: 'How to deal with banks?',
          keyword: 'banks',
          snippet: ''
      },
      {
          name: 'Financial institutions',
          keyword: 'financial-institutions',
          snippet: ''
      }
  ];
  ctrl.newStage = {
    name: ''
  };
  ctrl.getStages = function () {
    $http.get('/stages').then(function (response) {
      ctrl.stages = response.data;
    });
  };
  //
  // ctrl.addStage = function (stage) {
  //   $http.post('/stage', stage).then(function () {
  //     ctrl.newStage = {name: ''};
  //     return ctrl.getStages();
  //   });
  // };

  ctrl.getStages();
});
