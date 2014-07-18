'use strict';

angular.module('app', [])
.directive('myToggle', function(){
	return {
		restrict: 'A',
		link: function(scope, elm, attrs){
			var color = attrs.myToggle;
			elm.on('click', function(){
				elm.toggleClass(color);
			});
		},
		scope: true
	}
})
