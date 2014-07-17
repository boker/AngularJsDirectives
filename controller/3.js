//compile phase & scope in link, DOM transformation in compile & conditional transform
'use strict';

angular.module('app', [])
  .controller('Ctrl', function ($scope) {

  })
  .directive('dirOne', function () {
    return {
      restrict: 'E',
      template: '<div class="section">template</div>',
      scope: true,
      controller: function ($scope) {
        $scope.val = true;
      },
      compile: function (tElement, tAttrs) {
        console.log('from compile');
        tElement.children('.section').addClass('newclass');
        return function (scope, iElement, iAttrs) {
          if (scope.val) {
            iElement.children('.section').addClass('anotherclass');
          }
        };
      }
    }
  });
