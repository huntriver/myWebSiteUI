/**
 * Created by XinheHuang on 2016/7/12.
 */
'use strict';

angular.module('myApp')
    .controller('contactCtrl', function ($scope, $timeout, $interval) {

        $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }

        };


    });