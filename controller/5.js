'use strict';

angular.module('app', [])
  .controller('Ctrl', function ($scope) {

  })
  .directive('sampleCtrlOne', function () {
    var linkFn = {
      pre: function (scope) {
        console.log('in pre linking');
        scope.label = 'label-pre';
      },
      post: function (scope) {
        console.log('in post linking');
        scope.label = 'label-post';
      }
    };
    return {
      restrict: 'EACM',
      template: '<div class="section">template {{label}}</div>',
      compile: function (tE, tA) {
        console.log('in compile');
        console.dirxml(tE);
        return linkFn;
      },
      controller: function ($scope) {
        console.log('in controller');
        $scope.label = 'label';
      },
      link: linkFn
    }
  });
