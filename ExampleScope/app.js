'use strict';

angular.module('app', [])
.controller('Ctrl', function($scope){
	$scope.empName = 'Superman!';
})
.directive('sampleOne', function(){
	return {
		restrict: 'E',
		template: '<div class="row">Employee Id: {{id}}</div>'
					+ '<div class="row">Employee Name: {{empName}}</div>',
		link: function(scope){
			scope.id = 1;
		}
		//, scope: true
	}
})
.directive('sampleIsolate', function(){
	return {
		restrict: 'E',
		template: '<div class="row">Employee Id: {{id}}</div>'
					+ '<div class="row">Employee Name: {{empName}}</div>',
		link: function(scope){
			scope.id = 1;
		}
		, scope: {}
	}
})
