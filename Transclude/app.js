'use strict';

angular.module('app', [])
.controller('Ctrl', function($scope){
	$scope.emp = {id: 1, name: "SuperName"};
})
.directive('accordian', function(){
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="row" ng-click="toggleShow()">Show Content'
					+ '<div ng-show="show" ng-transclude></div>'
					+ '</div>',
		link: function(scope, elm, attrs){
			scope.toggleShow = function(){
				scope.show = !scope.show;
			};
			console.log(elm[0]);
		},
		scope: true
	}
})
