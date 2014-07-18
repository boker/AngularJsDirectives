'use strict';

angular.module('app', [])
.directive('sampleOne', function(){
	return {
		restrict: 'EA'
		,template: '<div class="row">Helloooo Directive!</div>'
		//,templateUrl: 'template.html'
		,replace: false
	}
})