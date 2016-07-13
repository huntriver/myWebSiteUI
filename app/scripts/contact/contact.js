/**
 * Created by XinheHuang on 2016/7/12.
 */
'use strict';

angular.module('myApp')
    .controller('contactCtrl', function ($scope,uiGmapGoogleMapApi) {

        $scope.submitForm = function () {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }

        };

            $scope.map = {
                center: {
                    latitude: 42.3478837,
                    longitude:  -71.1194419
                },
                zoom: 13
            }
        $scope.marker =
            {
                name: "Thing 1",
                id: 0,
                coords: {
                    latitude: 42.3478837,
                    longitude: -71.1194419
                },
                options: {},

                events: {
                    //click: function (marker, eventName, args) {            }

                }
            }



    });