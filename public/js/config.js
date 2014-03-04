'use strict';

//Setting up route
angular.module('am').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('all articles', {
                url: '/articles',
                templateUrl: 'views/articles/list.html'
            })
            .state('create article', {
                url: '/articles/create',
                templateUrl: 'views/articles/create.html'
            })
            .state('edit article', {
                url: '/articles/:articleId/edit',
                templateUrl: 'views/articles/edit.html'
            })
            .state('article by id', {
                url: '/articles/:articleId',
                templateUrl: 'views/articles/view.html'
            })
            .state('all residents', {
                url: '/residents',
                templateUrl: 'views/residents/list.html'
            })
            .state('create resident', {
                url: '/residents/create',
                templateUrl: 'views/residents/create.html'
            })
            .state('resident by id', {
                url: '/residents/:residentId',
                templateUrl: 'views/residents/view.html'
            })
            .state('create apartment', {
                url: '/apartments/create',
                templateUrl: 'views/apartments/create.html'
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
