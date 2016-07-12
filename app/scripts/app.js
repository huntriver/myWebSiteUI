/**
 * Created by XinheHuang on 2016/7/10.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ui.router',
        'ui.bootstrap',
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'scripts/home/home.html'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('about', {
                url: '/about',
                templateUrl: 'scripts/about/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'scripts/contact/contact.html'
            });
    })




