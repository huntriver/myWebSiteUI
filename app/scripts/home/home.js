/**
 * Created by XinheHuang on 2016/7/12.
 */
'use strict';

angular.module('myApp')
    .controller('homeCtrl', function ($scope, $timeout,$window) {
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
                img: 'img/fbplus.png',
                description: 'This project is a social network system'

            },

            {
                name: 'Tank VS Bugs',
                link: 'https://github.com/huntriver/TankVSBugs-CSE380-',
                img: 'img/tankvsbugs.png',
                description: 'This project is a game written in C++ with Box2D and Lua scripts.'
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
            // width: 960,
            height: 300,
            padding: 0.2,
            margin: {top: 20, right: 0, bottom: 30, left: 100},
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
                name: "C",
                number: 50
            },
            {
                name: "Java",
                number: 70
            },
        ]
        // angular.element(document).ready(function () {
        //     console.log('her');
        //     setFontSize();
        // });

        // angular.element($window).on('resize', function () {
        //
        //     setFontSize();
        // });
        // function setFontSize(){
        //     var w=$(".projectContainer").width();
        //     console.log(document);
        //     console.log($("h2"));
        //    console.log( $(".projectContainer h2").css('font-size'));
        //
        //     $(".projectContainer h2").css("font-size",w*30/467.45+"px");
        //     $(".projectContainer p,.projectContainer a").css("font-size",w*25/467.45+"px");
        // }


    })
    .directive('repeatDirective',function($window){
        return function(scope,element,attrs){
            // console.log(element.find(".hovereffect"));
            element.find(".hovereffect").on('touchstart', function (e) {
                'use strict'; //satisfy code inspectors
                var link = $(this); //preselect the link
                if (link.hasClass('hover')) {
                    return true;
                } else {
                    link.addClass('hover');
                    $('.hovereffect').not(this).removeClass('hover');
                    e.preventDefault();
                    return false; //extra, and to make sure the function has consistent return points
                }
            });

            setFontSize();
            angular.element($window).on('resize', function () {

                setFontSize();
            });
            function setFontSize() {
                var w = $(".projectContainer").width();
                angular.element(element).find("h2").css("font-size", w * 30 / 467.45 + "px");
                angular.element(element).find("p,a").css("font-size", w * 25 / 467.45 + "px");
            }
        }
    });