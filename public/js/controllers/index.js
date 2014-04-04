'use strict';

angular.module('am.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    $scope.residentIsOpen = true;
}]);