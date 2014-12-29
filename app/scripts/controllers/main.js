'use strict';

/**
 * @ngdoc function
 * @name stacksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stacksApp
 */
angular.module('stacksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
