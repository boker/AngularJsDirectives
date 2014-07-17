'use strict';

angular.module('app', [])
.controller('Ctrl', function($scope){
	$scope.ctrlDate = '07/17/2014';
})
.directive('datePicker', function(){
	return {
		restrict: 'E',
		require: '?ngModel',
		template: 'Date Picker: <input type="text" ng-click="selectDate()" ng-model="selectedDate"></input>',
		link: function(scope, elm, attrs, ngModel){
			ngModel = ngModel || {$setViewValue : angular.noop};

			scope.selectDate = function(){
				elm.datepicker('dialog', null, function(value){
					scope.$apply(function(){
						scope.selectedDate = value;
						ngModel.$setViewValue(value);
					});
				});
			};

			ngModel.$render = function(){
				scope.selectedDate = ngModel.$modelValue;
			};
		},
		scope: true
	}
})
