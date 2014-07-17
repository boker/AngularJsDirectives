//inter-directive communication & controller
'use strict';

angular.module('app', [])
  .controller('Ctrl', function ($scope) {

  })
  .directive('dirOne', function () {
    return {
      restrict: 'EACM',
      controller: function () {
        console.log('in controller 1');
        this.callCtrl = function () {
          console.log('calling 1 ...');
        };
      },
      link: function (scope, iElement, iAttrs, controller) {
        console.log('in link 1');
        controller.callCtrl();
      }
    }
  }).directive('dirTwo', function () {
    return {
      restrict: 'EACM',
      require: '^sampleCtrlOne',
      controller: function () {
        console.log('in controller 2');
        this.callCtrl = function () {
          console.log('calling 2 ...');
        };
      },
      link: function (scope, iElement, iAttrs, controller) {
        console.log('in link 2');
        controller.callCtrl();
      }
    }
  });
