'use strict';

angular.module('am.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [
        {
            title: 'Residents',
            link: 'residents'
        },
        {
            title: 'Apartments',
            link: 'apartments'
        }
    ];

    $scope.isCollapsed = false;
}]);