'use strict';

angular.module('app', [])
.controller('Ctrl', function($scope){
	$scope.id = 1;
	$scope.empName = 'Superman!';

})
.directive('sampleOne', function(){
	return {
		restrict: 'E',
		template: '<div class="row">Employee Id: {{id}}</div>'
					+ '<div class="row">Employee Name: {{empName}}</div>',
		link: function(scope){
			//scope.id = 2;
			//scope.empName = 'SpiderMan!';
		}
		//, scope: true
	}
});
