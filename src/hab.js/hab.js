var vl = require('vega-lite');
var d3 = window.d3 = require('d3');
var vg = window.vg = require('vega');
var hab = {version: 0.4};

function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function plot_graph(id, var1, var2, csvfile, x, y, animate) {
    d3.csv(csvfile, function(csvdata) {
        var datasofar = animate ? csvdata.slice(0,1) : csvdata;
        var spec = {
            description: 'High altitude balloon',
            data: {
                values: datasofar
            },
            mark: 'circle',
            encoding: {
                x: {
                    field: 'timestamp_fixed',
                    type: 'temporal',
                    timeUnit: 'hoursminutesseconds',
                    scale: {
                        zero: false
                    }
                },
                y: {
                    field: 'altitude_ft',
                    type: 'quantitative',
                    scale: {
                        zero: false
                    }
                }
            },
            config: {
                cell: {
                    width: 1000,
                    height: 600
                }
            }
        };

        if (x) {
            spec.encoding.x = x; // Use specified 'x' instead of timestamp
        }
        if (y) {
            spec.encoding.y = y; // Use specified 'y' instead of altitude
        }
        if(spec.encoding.x.field!="timestamp_fixed") {
            spec.encoding.x.scale.domain =  d3.extent(csvdata, function(d) {
                return spec.encoding.x.field=="timestamp_fixed"?d[spec.encoding.x.field]:+d[spec.encoding.x.field];
            });
        }
        if(spec.encoding.y.field!="timestamp_fixed") {
            spec.encoding.y.scale.domain = d3.extent(csvdata, function(d) {
                return spec.encoding.y.field=="timestamp_fixed"?d[spec.encoding.y.field]:+d[spec.encoding.y.field];
            });
        }

        function updategraph(view, data, i) {
            view.data('source').insert(data.slice(i, i + 1));
            view.update();
            window.setTimeout(updategraph, 50, view, data, i + 1);
        }

        var vgSpec = vl.compile(spec).spec;
            
        // parse a spec and create a visualization view
        vg.parse.spec(vgSpec, function(chart) {
            var view = chart({el: id}).update();
            if(animate) {
                updategraph(view, csvdata, 1);
            }
        });
    });
}


function setup_graph(id, var1, var2, var3, jsonfile, x, y) {

    $.ajax(jsonfile).done(function(response) {
        plot_graph(id, var1, var2, response.file, x, y, $(var3).is(':checked'));

        Object.keys(response.options).forEach(function(elt) {
            var title = response.options[elt];
            if (elt == 'timestamp_fixed') {
                elt += ' selected=true';
            }
            $(var1).append('<option value=' + elt + '>' + title + '</option>');
        });
        Object.keys(response.options).forEach(function(elt) {
            var title = response.options[elt];
            if (elt == 'altitude_ft') {
                elt += ' selected=true';
            }
            $(var2).append('<option value=' + elt + '>' + title + '</option>');
        });

        $(var1 + ',' + var2 + ',' + var3).on('change', function() {
            $(id).empty();
            var kvar1 = $(var1).val();
            var kvar2 = $(var2).val();
            var kname1 = $(var1 + ' option:selected').text();
            var kname2 = $(var2 + ' option:selected').text();
            var x1 = { field: 'timestamp_fixed', type: 'temporal', timeUnit: 'hoursminutesseconds' };
            var xaxis = kvar1 == 'timestamp_fixed' ? x1 : { field: kvar1, type: 'quantitative', scale: { zero: false } };
            var yaxis = kvar2 == 'timestamp_fixed' ? x1 : { field: kvar2, type: 'quantitative', scale: { zero: false } };
            plot_graph(id, var1, var2, response.file, xaxis, yaxis, $(var3).is(':checked'));
        });
    });

}
function setup_version(version) {
    d3.select(version)
        .append('p').text('hab.js: ' + hab.version)
        .append('p').text('vega-lite: ' + vl.version);
}
window.setup_graph = setup_graph;
window.setup_version = setup_version;
