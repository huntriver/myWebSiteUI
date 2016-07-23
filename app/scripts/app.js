/**
 * Created by XinheHuang on 2016/7/10.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'ngAnimate',
    'ajoslin.promise-tracker'
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
    .config(function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyCCDAlm1xXm0aYXAYcfVheJvKSKttIgCM8',
            v: '3.23', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    })
    .run(function ($rootScope, $state, $timeout) {
        $rootScope
            .$on('$viewContentLoaded',
                function (event, viewConfig) {
                    // window.scrollTo(0, 0);

                    // var waypoint = new Waypoint({
                    //     element: document.getElementById('skill-section'),
                    //     handler: function (direction) {
                    //         console.log('Scrolled to waypoint!')
                    //     }
                    // })
                    //
                    //  console.log($state);
                    $timeout(function () {
                        Waypoint.refreshAll()
                    }, 0);
                    // $('#skill-section').waypoint(function(direction) {
                    //     console.log(direction);
                    // })
                    // console.log(  $('#skill-section'));
                    // console.log("View Load: the view is loaded, and DOM rendered!");
                    //  Waypoint.refreshAll()
                    //
                });
        $rootScope.$on('$stateChangeSuccess', function () {
            // console.log("View Load:change succd!");
           $("html, body").animate({scrollTop: 0}, 200);
            // console.log($state);
            // $('#skill-section').waypoint(function(direction) {
            //     console.log(direction);
            // })
            // console.log(  $('#skill-section').waypoint);
            Waypoint.refreshAll()
            // Waypoint.refreshAll()
        });
    })




