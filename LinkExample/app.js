'use strict';

angular.module('app', [])
.directive('myToggle', function(){
	return {
		restrict: 'A',
		link: function(scope, elm, attrs, ngModel){
			

		},
		scope: true
	}
})
