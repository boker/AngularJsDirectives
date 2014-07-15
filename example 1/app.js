'use strict';

angular.module('app', [])
.directive('sampleOne', function(){
	return {
		restrict: 'EA',
		template: '<div class="table" ng-show="true">Yoohoo my first directive</div>'
		//,templateUrl: 'template.html',
		//,replace: true
		//, priority: 1
		//, terminal: true
	}
})