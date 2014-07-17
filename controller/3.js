'use strict';

angular.module('app', [])
  .controller('Ctrl', function ($scope) {

  })
  .directive('sampleCtrlOne', function () {
    return {
      restrict: 'E',
      template: '<div class="section">template</div>',
      scope: true,
      compile: function (tElement, tAttrs) {
        console.log('from compile');
        tElement.children('.section').addClass('newclass');
        return function (scope, iElement, iAttrs) {
          iElement.children('.section').addClass('anotherclass');
        };
      }
    }
  });
