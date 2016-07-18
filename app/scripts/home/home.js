/**
 * Created by XinheHuang on 2016/7/12.
 */
'use strict';

angular.module('myApp')
    .controller('homeCtrl', function ($scope) {
        $scope.$on('$viewContentLoaded',
            function(event){
               console.log(123);
            });
        // angular.element(document).ready(function () {
        //     $('#skill-section').waypoint(function() {
        //         console.log(12323);
        //     })
        // });


        var waypoint = new Waypoint({
            element: document.getElementById('skill-section'),
            handler: function(direction) {
                console.log('Scrolled to waypoint!');
            }
        });
        $scope.projects = [
            {
                name: 'Angular Components',
                link: 'https://gp.ca.com',
                img: 'img/angularjs.png'
            },
            {
                name: 'CA IOT',
                link: 'https://gp.ca.com',
                img: 'img/ca.png'
            },
            {
                name: 'FacebookPlus',
                link: 'https://github.com/huntriver/FacebookPlus-CSE-305-',
                img: 'img/fb+.png'
            },

            {
                name: 'Tank VS Bugs',
                link: 'https://github.com/huntriver/TankVSBugs-CSE380-',
                img: 'img/tankvsbugs.png'
            },

            {
                name: 'JOS',
                link: 'https://github.com/huntriver/JOS-CSE-506-',
                img: 'img/jos.png'
            },
        ]
        // {
        //     name:'To Be Continued',
        //     link:'#',
        //     img:'img/tobecontinued.png'
        // },
        $scope.barconfig = {
            width: 960,
            height: 500,
            padding: 0.2,
            margin: {top: 20, right: 20, bottom: 30, left: 80},
            // legendSpacing: 5,
            // legendRectSize: 20,
            // tipHeight: 40,
            duration: 400,
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