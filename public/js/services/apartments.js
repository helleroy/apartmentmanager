'use strict';

angular.module('am.apartments')
    .factory('Apartments', ['$resource', function($resource) {
        return $resource('apartments/:apartmentId', {
            apartmentId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }]);