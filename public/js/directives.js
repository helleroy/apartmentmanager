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