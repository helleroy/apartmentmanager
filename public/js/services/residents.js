'use strict';

angular.module('am.residents')
    .factory('Residents', ['$resource',
        function($resource) {
            return $resource(
                'residents/:residentId', {
                    residentId: '@_id'
                }, {
                    update: {
                        method: 'PUT'
                    }
                });
        }]);