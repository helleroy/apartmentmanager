'use strict';

angular.module('am').directive('resident', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/residents/resident.html',
    };
});

angular.module('am').directive('residents', function () {
    return {
        restrict: 'E',
        controller: 'ResidentsController',
        templateUrl: 'views/residents/list.html',
        scope: {}
    };
});

angular.module('am').directive('apartment', function () {
    return {
        restrict: 'E',
        controller: 'ApartmentsController',
        templateUrl: 'views/apartments/apartment.html',
        scope: {}
    };
});

angular.module('am').directive('apartments', function () {
    return {
        restrict: 'E',
        controller: 'ApartmentsController',
        templateUrl: 'views/apartments/list.html',
        scope: {}
    };
});

angular.module('am').directive('parkingspot', function () {
    return {
        restrict: 'E',
        controller: 'ParkingSpotsController',
        templateUrl: 'views/parkingspots/parkingspot.html',
        scope: {}
    };
});

angular.module('am').directive('parkingspots', function () {
    return {
        restrict: 'E',
        controller: 'ParkingSpotsController',
        templateUrl: 'views/parkingspots/list.html',
        scope: {}
    };
});

angular.module('am').directive('clickToEdit', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/clicktoedit.html',
        scope: {
            value: '=editableModel'
        },
        controller: function ($scope) {
            $scope.editorEnabled = false;
            $scope.editableValue = $scope.value;

            $scope.enableEditor = function () {
                $scope.editorEnabled = true;
                $scope.editableValue = $scope.value;
            };

            $scope.disableEditor = function () {
                $scope.editorEnabled = false;
            };

            $scope.done = function () {
                $scope.value = $scope.editableValue;
                $scope.disableEditor();
            };
        }
    };
});

angular.module('am').directive('toggleableLink', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/toggleablelink.html',
        transclude: true,
        scope: {
            modelToWatch: '&',
            clickFunction: '&'
        },
        link: function (scope) {
            scope.showLink = false;
            scope.$watch(scope.modelToWatch, function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                scope.showLink = true;
            }, true);
        }
    };
});