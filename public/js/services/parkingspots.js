'use strict';

angular.module('am.parkingSpots')
    .factory('ParkingSpots', ['$resource', function($resource) {
        return $resource('parkingspots/:parkingSpotId', {
            parkingSpotId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }]);