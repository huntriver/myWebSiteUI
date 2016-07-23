/**
 * Created by XinheHuang on 2016/7/18.
 */
/**
 * Created by XinheHuang on 2016/7/15.
 */
angular.module("myApp")
    .directive("myWaypoint", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var wayp = new Waypoint({
                    element: element,
                    handler: function (direction) {

                        if (direction == "down") {

                            scope.animation();

                        }
                    },
                    offset: '70%',

                })


            }
        }
    })