/**
 * Created by XinheHuang on 2016/7/15.
 */
angular.module('myApp')
    .directive('barChart', function ($window) {
        var link = function (scope, element) {

            var config = scope.config;
            var data = scope.data;
            var margin = config.margin;
            // console.log(config);
            if (!config.width)
                config.width = parseInt(d3.select(element.find('div')[0]).style('width'), 10);
            //console.log(config.width);
            var width = config.width - margin.left - margin.right;
            //console.log(width);
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
            var chart=svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            x.domain(data.map(function (d) {
                return d.name;
            }));
            y.domain([0, 100]);

            chart.append("g")
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

            chart.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("rx", 10)
                .attr("ry", 10)
                .attr("y", function (d) {
                    return x(d.name);
                })
                .attr("height", x.bandwidth())
                .attr("x", function (d) {
                    return 0
                })
                .attr("width", 0);

            scope.animation = function () {
                chart.selectAll(".bar")
                    .attr("width", 0)
                    .transition()
                    .duration(config.duration)
                    .attr("width", function (d) {
                        return y(d.number);
                    });
            }
            scope.animation();

            angular.element($window).on('resize', function(){


                config.width = parseInt(d3.select(element.find('div')[0]).style('width'), 10) - 30;
                if (!config.width) return;
              //  console.log(config.width);
                svg.attr("width", config.width);
               // console.log(svg.attr("width"));
                width = config.width - margin.left - margin.right;
                // reset x range
                y.range([0, config.width - margin.left - margin.right])

                chart.selectAll(".bar")
                    .transition()
                    .duration(config.duration)
                    .attr("width", function (d) {
                        return y(d.number);
                    });



                //redrawItems();
            });


        }
        var controller = function ($scope) {

        }
        return {
            link: link,
            scope: {
                "config": "=",
                "data": "=",
                "animation": "=",
            },
            controller: controller,
            template: "<div class='barchart-wrapper'></div>",
            restrict: "AE"
        }
    })