'use strict';

angular.module('app', [])
.controller('Ctrl', function($scope){
	$scope.id = 1;
	$scope.empName = 'Superman!';

	$scope.callBack = function(p1, p2){
		console.log(p1);
		console.log(p2);
	};
})
.directive('sampleIsolate', function(){
	return {
		restrict: 'E',
		template: '<div class="row">Employee Id: {{id}}</div>'
					+ '<div class="row">Employee Name: {{empName}}</div>'
					+ '<div class="row"><button ng-click="changeName()">Change Name</button></div>',
		link: function(scope){
			scope.id = 3;
			scope.changeName = function(){
				scope.empName = 'Isolated Name';
				scope.notify();
			};
		}
		, scope: {
			empName: '@'
			//empName: '=',
			,notify: '&notify'
		}
	}
})
