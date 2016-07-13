var d3 = window.d3 = require('d3');
var vg = window.vg = require('vega');
var vl = require('vega-lite');
var _ = require('underscore');

// Settings
var hab = {
    version: 0.4,
};

function plotGraph(id, csvfile, x, y, c, animate, width, height) {
    d3.csv(csvfile, (csvdata) => {
        var datasofar = animate ? csvdata.slice(0, 1) : csvdata;
        var spec = {
            description: 'High altitude balloon',
            data: {
                values: datasofar,
            },
            mark: 'circle',
            encoding: {
                x: x,
                y: y,
                color: c,
            },
            config: {
                cell: {
                    width: 700,
                    height: 400,
                },
            },
        };
        console.log(spec.encoding);

        spec.encoding.x.scale.domain = d3.extent(csvdata, (d) => {
            return +d[spec.encoding.x.field];
        });
        spec.encoding.y.scale.domain = d3.extent(csvdata, (d) => {
            return +d[spec.encoding.y.field];
        });

        function updategraph(view, data, i) {
            view.data('source').insert(data.slice(i, i + 1));
            view.update();
            window.setTimeout(updategraph, 50, view, data, i + 1);
        }

        var vgSpec = vl.compile(spec).spec;

        // parse a spec and create a visualization view
        vg.parse.spec(vgSpec, (chart) => {
            var view = chart({ el: id }).update();
            if (animate) {
                updategraph(view, csvdata, 1);
            }
        });
    });
}
function setupGraph(id, var1, var2, var3, jsonfile) {
    $.ajax(jsonfile).done((response) => {
        _.keys(response.options).forEach((elt) => {
            var title = response.options[elt];
            var ret = elt;
            if (ret === response.def1) {
                ret += ' selected=true';
            }
            $(var1).append(`<option value=${ret}>${title}</option>`);
        });
        _.keys(response.options).forEach((elt) => {
            var title = response.options[elt];
            var ret = elt;
            if (ret === response.def2) {
                ret += ' selected=true';
            }
            $(var2).append(`<option value=${ret}>${title}</option>`);
        });

        function plot() {
            var kvar1 = $(var1).val();
            var kvar2 = $(var2).val();
            var xaxis = { field: kvar1, type: 'quantitative', scale: { zero: false } };
            var yaxis = { field: kvar2, type: 'quantitative', scale: { zero: false } };

            $(id).empty();
            plotGraph(id, response.file, xaxis, yaxis, null, $(var3).is(':checked'));
        }

        $(`${var1},${var2},${var3}`).on('change', plot);
        plot();
    });
}
function setupVersion(version) {
    d3.select(version)
      .append('p')
      .text(`hab.js: ${hab.version}`)
      .append('p')
      .text(`vega-lite: ${vl.version}`);
}
window.setupGraph = setupGraph;
window.setupVersion = setupVersion;
window.plotGraph = plotGraph;
