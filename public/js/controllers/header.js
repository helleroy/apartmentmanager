'use strict';

angular.module('am.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.isCollapsed = false;
}]);