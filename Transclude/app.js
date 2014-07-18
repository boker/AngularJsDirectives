'use strict';

angular.module('app', [])
.controller('Ctrl', function($scope){
	$scope.emp = {id: 1, firstName: "SuperName", lastName: "patel"};
})
.directive('accordian', function(){
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="row">Show Content'
					+ '<div ng-transclude></div>'
					+ '</div>',
		link: function(scope, elm, attrs){
			var clickableElm = $(elm[0].childNodes[0]);
			var toggableElm = $(clickableElm[0].childNodes[1]);
			clickableElm.on('click', function(){
				toggableElm.toggleClass('hidden');
			});
		}
	}
})
