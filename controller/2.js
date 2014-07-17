'use strict';

angular.module('app', [])
  .controller('Ctrl', function ($scope) {

  })
  .directive('sampleCtrlOne', function () {
    return {
      restrict: 'E',
      controller: function ($scope, $element, $attrs, $transclude) {
        console.log($scope, $element, $attrs, $transclude);
        $scope.value = 'value in c1';
        this.ex = function () {
          console.log('exec ctrl 1 func');
        }
      }
    }
  }).directive('sampleCtrlTwo', function () {
    return {
      restrict: 'E',
      require: '^sampleCtrlOne',
      controller: function ($scope) {
        $scope.value = 'value in c2';
        console.log('in ctrl 2');
      },
      link: function (s, e, a, c) {
        console.log(s, e, a, c);
        c.ex();
      }
    }
  })
