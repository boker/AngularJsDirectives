'use strict';

angular.module('app', [])
  .controller('Ctrl', function ($scope) {

  })
  .directive('sampleCtrlOne', function () {
    return {
      restrict: 'EACM',
      transclude: true,
      replace: true,
      template: '<div class="section">' +
        '<h3>Heading</h3>' +
        '<div ng-transclude></div>' +
        '</div>',
      link: {
        pre: function (iS, iE, iA) {
          console.dirxml('pre', iE);
        },
        post: function (iS, iE, iA) {
          console.dirxml('post', iE);
        }
      }
    }
  });
