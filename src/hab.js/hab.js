var d3 = require('d3');
var hab = {"version": 0.2 };


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function svgr(id,w,h) {
    return d3.select(id)
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("id", "visualization")
        .attr("xmlns", "http://www.w3.org/2000/svg");
}



function plot_arbitrary(data, id,var1,var2,name1,name2,w,h) {
    var svg = svgr(id,w,h);
    var x, y; //scales
    if(var1=="timestamp_fixed") {
        x = d3.time.scale().range([0,w-100]).domain(d3.extent(data, function (d) {
            return d.timestamp_fixed;
        }));
    }
    else {
        x = d3.scale.linear().range([0,w-100]).domain(d3.extent(data, function (d) {
            return d[var1];
        }));
    }

    if(var2=="timestamp_fixed") {
        y = d3.time.scale().range([h-50,0]).domain(d3.extent(data, function (d) {
            return d.timestamp_fixed;
        }));
    }
    else {
        y = d3.scale.linear().range([h-50, 0]).domain(d3.extent(data, function (d) {
            return d[var2];
        }));
    }

    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left");

    var valueline = d3.svg.line()
        .interpolate("cardinal")
        .y(function (d) {
            return y(d[var2]);
        })
        .x(function (d) {
            return x(d[var1])+100;
        });

    var path = svg.append("path")
        .attr("d", valueline(data))
        .attr("stroke", "steelblue")
        .attr("stroke-width", "2")
        .attr("fill", "none");
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(100,550)")
        .call(xAxis);
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(100,0)")
        .call(yAxis);
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "translate(0,550)")
        .attr("transform", "rotate(-90)")
        .text(name2);
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", 6)
        .attr("dx", ".75em")
        .attr("transform", "translate(700,590)")
        .text(name1);


    svg.append("text")
        .attr("x", w / 2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "25px")
        .text(name1 + " vs. " + name2);
    var totalLength = path.node().getTotalLength();
    path
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(2000)
        .ease("linear")
        .attr("stroke-dashoffset", 0);
}





function setup_graph(id,var1,var2,w,h,jsonfile) {
    var format = d3.time.format("%-m/%-d/%Y %H:%M:%S");
    d3.json(jsonfile, function(error, json) {
        if (error) {
            alert(error);
            return;
        }
        d3.csv(json.file, function (error, data) {
            var def = Object.keys(json.options);
            if (error) {
                alert(error);
                return;
            }
            data.forEach(function (d) {
                def.forEach(function(elt) { if(d[elt]) { d[elt] = parseFloat(d[elt]); } });
                d[json.timefield] = format.parse(d[json.timefield]);
            });

            json.options[json.timefield]="Time";
            def = Object.keys(json.options);
            def.forEach(function(elt) {
                $(var1).append("<option value="+elt+">"+json.options[elt]+"</option>");
                $(var2).append("<option value="+elt+">"+json.options[elt]+"</option>");
            });
            var uvar1=def[0],uvar2=def[0],uname1=json.options[uvar1],uname2=json.options[uvar2];
            plot_arbitrary(data, id,uvar1,uvar2,uname1,uname2,w,h);


            $(var1+","+var2).on('change', function() {
                $(id).empty();
                var kvar1=$(var1).val(),kvar2=$(var2).val(),
                    kname1=$(var1+" option:selected").text(),
                    kname2=$(var2+" option:selected").text();
                plot_arbitrary(data, id,kvar1,kvar2,kname1,kname2,w,h);
            });
        });
    });
};

function setup_version(version) {
    d3.select(version).append("p").text("hab.js: " + hab.version).append("p").text("d3: " + d3.version);
}
window.setup_graph = setup_graph;
window.setup_version = setup_version;
