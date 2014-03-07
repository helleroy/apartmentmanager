'use strict';

//Setting up route
angular.module('am').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('all residents', {
                url: '/residents',
                templateUrl: 'views/residents/list.html'
            })
            .state('create resident', {
                url: '/residents/create',
                templateUrl: 'views/residents/create.html'
            })
            .state('edit resident', {
                url: '/residents/:residentId/edit',
                templateUrl: 'views/residents/edit.html'
            })
            .state('resident by id', {
                url: '/residents/:residentId',
                templateUrl: 'views/residents/view.html'
            })
            .state('all apartments', {
                url: '/apartments',
                templateUrl: 'views/apartments/list.html'
            })
            .state('create apartment', {
                url: '/apartments/create',
                templateUrl: 'views/apartments/create.html'
            })
            .state('edit apartment', {
                url: '/apartments/:apartmentId/edit',
                templateUrl: 'views/apartments/edit.html'
            })
            .state('apartment by id', {
                url: '/apartments/:apartmentId',
                templateUrl: 'views/apartments/view.html'
            })
            .state('all parking spots', {
                url: '/parkingspots',
                templateUrl: 'views/parkingspots/list.html'
            })
            .state('create parking spot', {
                url: '/parkingspots/create',
                templateUrl: 'views/parkingspots/create.html'
            })
            .state('edit parking spot', {
                url: '/parkingspots/:parkingSpotId/edit',
                templateUrl: 'views/parkingspots/edit.html'
            })
            .state('parking spot by id', {
                url: '/parkingspots/:parkingSpotId',
                templateUrl: 'views/parkingspots/view.html'
            })
            .state('home', {
                url: '/',
                templateUrl: 'views/index.html'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('am').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
