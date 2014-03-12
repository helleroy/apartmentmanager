'use strict';

angular.module('am').directive('resident', function () {
    return {
        restrict: 'E',
        controller: 'ResidentsController',
        templateUrl: 'views/residents/resident.html',
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

angular.module('am').directive('parkingspot', function () {
    return {
        restrict: 'E',
        controller: 'ParkingSpotsController',
        templateUrl: 'views/parkingspots/parkingspot.html',
        scope: {}
    };
});