'use strict';

angular.module('am.parkingspots')
    .factory('ParkingSpots', ['$resource', function($resource) {
        return $resource('parkingspots/:parkingSpotId', {
            parkingSpotId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }]);