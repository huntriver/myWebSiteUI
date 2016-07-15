/**
 * Created by XinheHuang on 2016/7/12.
 */
'use strict';

angular.module('myApp')
    .controller('homeCtrl', function ($scope) {

      $scope.projects=[
          {
              name:'Angular Components',
              link:'https://gp.ca.com',
              img:'img/angularjs.png'
          },
          {
              name:'CA IOT',
              link:'https://gp.ca.com',
              img:'img/ca.png'
          },
          {
              name:'FacebookPlus',
              link:'https://github.com/huntriver/FacebookPlus-CSE-305-',
              img:'img/fb+.png'
          },

          {
              name:'Tank VS Bugs',
              link:'https://github.com/huntriver/TankVSBugs-CSE380-',
              img:'img/tankvsbugs.png'
          },

          {
              name:'JOS',
              link:'https://github.com/huntriver/JOS-CSE-506-',
              img:'img/jos.png'
          },
          // {
          //     name:'To Be Continued',
          //     link:'#',
          //     img:'img/tobecontinued.png'
          // },

      ]

    });