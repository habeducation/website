window.d3 = require('d3');
window.vg = require('vega');
var vl = require('vega-lite');
var hab = {"version": 0.3};


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function plot_graph(id, var1, var2, csvfile, x, y) {
    
    var spec = {
      "description": "High altitude balloon",
      "data": {
        "url": csvfile,
        "formatType": "csv"
      },
      "mark": "line",
      "encoding": {
        "x": {"field": "timestamp_fixed","type": "temporal","timeUnit":"hoursminutesseconds"},
        "y": {"field": "altitude_ft","type": "quantitative"}
      },
      "config": {"cell": {"width": 1000, "height": 600}}
    };

    if(x) spec.encoding.x = x;
    if(y) spec.encoding.y = y;

    var vgSpec = vl.compile(spec).spec;
        
    // parse a spec and create a visualization view
    vg.parse.spec(vgSpec, function(chart) {
        chart({el: id}).update();
    });
}


function setup_graph(id, var1, var2, jsonfile, x, y) {

    $.ajax(jsonfile).done(function(response) {
        plot_graph(id, var1, var2, response.file, x, y);

        Object.keys(response.options).forEach(function(elt) {
            var title = response.options[elt];
            if(elt == "timestamp_fixed") elt += " selected=true";
            $(var1).append("<option value="+elt+">"+title+"</option>");
        });
        Object.keys(response.options).forEach(function(elt) {
            var title = response.options[elt];
            if(elt == "altitude_ft") elt += " selected=true";
            $(var2).append("<option value="+elt+">"+title+"</option>");
        });

        $(var1+","+var2).on('change', function() {
            $(id).empty();
            var kvar1 = $(var1).val();
            var kvar2 = $(var2).val();
            var kname1 = $(var1+" option:selected").text();
            var kname2 = $(var2+" option:selected").text();
            var xaxis = kvar1 == "timestamp_fixed"?
                {"field": "timestamp_fixed","type": "temporal","timeUnit":"hoursminutesseconds"}:
                {"field": kvar1, "type":"quantitative"};
            var yaxis = kvar2 == "timestamp_fixed"?
                {"field": "timestamp_fixed","type": "temporal","timeUnit":"hoursminutesseconds"}:
                {"field": kvar2, "type":"quantitative"};

            plot_graph(id, var1, var2, response.file, xaxis, yaxis);
        });
    });

}
function setup_version(version) {
    d3.select(version)
        .append("p").text("hab.js: " + hab.version)
        .append("p").text("d3: " + d3.version)
        .append("p").text("vega: " + vg.version);
}
window.setup_graph = setup_graph;
window.setup_version = setup_version;
