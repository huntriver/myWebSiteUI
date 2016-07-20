/**
 * Created by XinheHuang on 2016/7/12.
 */
'use strict';

angular.module('myApp')
    .controller('homeCtrl', function ($scope,$timeout) {
        // $scope.$on('$viewContentLoaded',
        //     function(event){
        //        console.log(123);
        //     });
        // angular.element(document).ready(function () {
        //     $('#skill-section').waypoint(function() {
        //         console.log(12323);
        //     })
        // });
        // $scope.$on('$viewContentLoaded', function() {
        //     console.log(123);
        // });
        // console.log(1);
        // var waypoint = new Waypoint({
        //     element: document.getElementById('skill-section'),
        //     handler: function(direction) {
        //         console.log('Scrolled to waypoint!');
        //     }
        // });
        // Waypoint.refreshAll()
        //
        // $('#skill-section').waypoint(function() {
        //     console.log(12323);
        // })

        //
        // $timeout($('#skill-section').waypoint(function(direction) {
        //     console.log(direction);
        // }))

        // console.log($('#skill-section'));
        $scope.projects = [
            {
                name: 'Angular Components',
                link: 'https://gp.ca.com',
                img: 'img/angularjs.png',
                description: 'This project is a collection of CA designed AngularJS UI Components.'
            },
            {
                name: 'IOT UI',
                link: 'https://gp.ca.com',
                img: 'img/ca.png',
                description: 'This project is the UI for IoT project.'
            },
            {
                name: 'Facebook Plus',
                link: 'https://github.com/huntriver/FacebookPlus-CSE-305-',
                img: 'img/fb+.png',
                description:'This project is a social network system'

            },

            {
                name: 'Tank VS Bugs',
                link: 'https://github.com/huntriver/TankVSBugs-CSE380-',
                img: 'img/tankvsbugs.png',
                description:'This project is a game written in C++ with Box2D and Lua scripts.'
            },

            {
                name: 'JOS',
                link: 'https://github.com/huntriver/JOS-CSE-506-',
                img: 'img/jos.png',
                description: 'a series of labs where you build up an operating system called JOS. '
            },
        ]
        // {
        //     name:'To Be Continued',
        //     link:'#',
        //     img:'img/tobecontinued.png'
        // },
        $scope.barconfig = {
            width: 960,
            height: 300,
            padding: 0.2,
            margin: {top: 20, right: 20, bottom: 30, left: 80},
            // legendSpacing: 5,
            // legendRectSize: 20,
            // tipHeight: 40,
            duration: 600,
            yDomain: 'number',
            xDomain: 'name'
        };
        $scope.bardata = [

            {
                name: "Javascript",
                number: 90
            },
            {
                name: "AngularJS",
                number: 90
            },
            {
                name: "JQuery",
                number: 80
            },
            {
                name: "Python",
                number: 20
            },
            {
                name:"C",
                number:50
            },
            {
                name: "Java",
                number: 70
            },
        ]


    });