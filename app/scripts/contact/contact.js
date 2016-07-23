/**
 * Created by XinheHuang on 2016/7/12.
 */
'use strict';

angular.module('myApp')
    .controller('contactCtrl', function ($scope, uiGmapGoogleMapApi, promiseTracker, $http, $log) {
        // $scope.progress = promiseTracker();
        $scope.status = 'not started';
        $scope.submitForm = function () {

            // check to make sure the form is completely valid
            if (!$scope.userForm.$valid)
                return;
            $scope.status='sending';
            $("#myModal").modal("show");


            $scope.formData = {
                'name': $scope.firstName + " " + $scope.lastName,
                'email': $scope.email,
                'message': $scope.message
            };
           // console.log($scope.formData);

            $http.post('/contact', $scope.formData)

                .then(
                    function (response) {
                        var data=response.data;
                        if (data == 'success') {
                            $scope.firstName = null;
                            $scope.lastName = null;
                            $scope.email = null;
                            $scope.message = null;
                            $scope.status = 'Your message has been sent!';
                            $scope.userForm.$setPristine();
                        } else {
                            $scope.status = 'Oops, we received your message, but there was an error processing it.';
                            $log.error(data);
                        }
                    },
                    function (error) {
                        var data=error.data;
                        $scope.status = 'There was a network error. Try again later.';
                        $log.error(data);
                    });


            // $timeout(function () {
            //     // $scope.status = "success";
            //     // $("#myModal").modal("hide");
            //
            // }, 3000);


        };

        $scope.map = {
            center: {
                latitude: 42.3478837,
                longitude: -71.1194419
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