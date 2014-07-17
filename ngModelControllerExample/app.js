'use strict';

angular.module('app', [])
.controller('Ctrl', function($scope){
	$scope.dob = '07/17/2014';
})
.directive('datePicker', function(){
	function setTextboxValue(elm, value){
		$(elm.children()[0]).val(value);
	};

	return {
		restrict: 'E',
		require: '?ngModel',
		template: 'Date Picker: <input type="text" ng-click="selectDate()"></input>',
		link: function(scope, elm, attrs, ngModel){
			ngModel = ngModel || {$setViewValue : angular.noop};

			scope.selectDate = function(){
				$(elm).datepicker('dialog', null, function(value){
					setTextboxValue(elm, value);
					
					scope.$apply(function(){
						ngModel.$setViewValue(value);
					});
				});
			};

			ngModel.$render = function(){
				setTextboxValue(elm, ngModel.$modelValue);
			};
		}
	}
})
