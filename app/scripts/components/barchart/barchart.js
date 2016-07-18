/**
 * Created by XinheHuang on 2016/7/15.
 */
angular.module('myApp')
    .directive('barChart', function () {
        var link = function (scope) {

            var config = scope.config;
            var data = scope.data;
            var margin = config.margin;
            // console.log(config);

            var width = config.width - margin.left - margin.right;
            var height = config.height - margin.top - margin.bottom;

            var x = d3.scaleBand()
                .range([height, 0]).round(true).padding(config.padding);

            var y = d3.scaleLinear()
                .range([0, width]);

            var xAxis = d3.axisLeft()
                .scale(x);

            var yAxis = d3.axisBottom()
                .scale(y);


            var svg = d3.select(".barchart-wrapper").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            x.domain(data.map(function (d) {
                return d.name;
            }));
            y.domain([0, 100]);
            console.log(y.domain)
            svg.append("g")
                .attr("class", "x axis")

                .call(xAxis);
            //
            // svg.append("g")
            //     .attr("class", "y axis")
            //     .attr("transform", "translate(0," + height + ")")
            //     .call(yAxis)
            //     .append("text")
            //     .attr("transform", "rotate(-90)")
            //     .attr("y", 6)
            //     .attr("dy", ".71em")
            //     .style("text-anchor", "end")
            //     .text("Frequency");

            svg.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("y", function (d) {
                    return x(d.name);
                })
                .attr("height", x.bandwidth())
                .attr("x", function (d) {
                    return 0
                })
                .attr("width", 0);

            svg.selectAll(".bar")
                .transition()
                .duration(config.duration)
                .attr("width", function (d) {
                    return y(d.number);
                });
            function type(d) {
                d.number = +d.number;
                return d;
            }

        }
        var controller = function ($scope) {

        }
        return {
            link: link,
            scope: {
                "config": "=",
                "data": "="
            },
            controller: controller,
            template: "<div class='barchart-wrapper'></div>",
            restrict: "AE"
        }
    })