'use strict';

angular.module('am.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    }, {
        'title': 'Create New Resident',
        'link': 'residents/create'
    }];

    $scope.isCollapsed = false;
}]);