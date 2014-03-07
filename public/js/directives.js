'use strict';

angular.module('am').directive('resident', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/residents/resident.html',
        scope: {}
    };
});

angular.module('am').directive('apartment', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/apartments/apartment.html',
        scope: {}
    };
});

angular.module('am').directive('parkingspot', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/parkingspots/parkingspot.html',
        scope: {}
    };
});