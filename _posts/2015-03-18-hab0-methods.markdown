---
layout: post
title:  "Methods"
date:   2015-03-18 08:43:59
author: Dustin Mayfield-Jones
tags:	Launches
launch: hab_0
---

<!-- Data from www.netmarketshare.com. Select Browsers => Desktop share by version. Download as tsv. -->
<div id="container-a" style="min-width: 310px; max-width: 600px; height: 400px; margin: 0 auto"></div>

<!-- Data from www.netmarketshare.com. Select Browsers => Desktop share by version. Download as tsv. -->
<pre id="tsv" style="display:none">Browser Version	Total Market Share
balloon helium	18%
balloon latex	12%
parachute	6%
sensordrone	14%
gopro camera	14%
gopro battery	9%
trackuino electronics	6%
trackuino pcb	1%
trackuino gps	7%
trackuino antennae	2%
trackuino battery	4%
trackuino transmitter	7%
</pre>
<script> 
$(function () {

    Highcharts.data({
        csv: document.getElementById('tsv').innerHTML,
        itemDelimiter: '\t',
        parsed: function (columns) {

            var brands = {},
                brandsData = [],
                versions = {},
                drilldownSeries = [];

            // Parse percentage strings
            columns[1] = $.map(columns[1], function (value) {
                if (value.indexOf('%') === value.length - 1) {
                    value = parseFloat(value);
                }
                return value;
            });

            $.each(columns[0], function (i, name) {
                var brand,
                    version;

                if (i > 0) {

                    // Remove special edition notes
                    name = name.split(' -')[0];

                    // Split into brand and version
                    //version = name.match(/([0-9]+[a-z]*)/);
                    version = name.match(/(\s[a-z]*)/);
                    if (version) {
                        version = version[0];
                    }
                    brand = name.replace(version, '');

                    // Create the main data
                    if (!brands[brand]) {
                        brands[brand] = columns[1][i];
                    } else {
                        brands[brand] += columns[1][i];
                    }

                    // Create the version data
                    if (version !== null) {
                        if (!versions[brand]) {
                            versions[brand] = [];
                        }
                        versions[brand].push([version, columns[1][i]]);
                    }
                }

            });

            $.each(brands, function (name, y) {
                brandsData.push({
                    name: name,
                    y: y,
                    drilldown: versions[name] ? name : null
                });
            });
            $.each(versions, function (key, value) {
                drilldownSeries.push({
                    name: key,
                    id: key,
                    data: value
                });
            });

            // Create the chart
            chart = new Highcharts.Chart({
                chart: {
                    type: 'pie',
                    renderTo: 'container-a'
                },
                title: {
                    text: 'Item breakdown by percentage of total project cost'
                },
                subtitle: {
                    text: 'Click the slices for more. No, really. Please click them.'
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}: {point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total project cost<br/>'
                },

                series: [{
                    name: 'Item',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }
            });
        }
    });
});
</script>

<div class="spacer"></div>

<div id="container-b" style="min-width: 310px; max-width: 600px; height: 400px; margin: 0 auto"></div>
<!--<div id="container-b" style="height: 400px"></div>-->

<script>
$(function () {
   chart = new Highcharts.Chart({
        chart: {
        	renderTo: 'container-b',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'HAB_0 cost breakdown in US dollar'
        },
        subtitle: {
            text: ''
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Cost',
            data: [
                ['balloon (latex/helium)', 215],
                ['parachute', 45],
                ['sensordrone', 100],
                ['gopro', 170],
                ['trackuino', 200],
                
            ]
        }]
    });
});
</script>



While the total cost of HABs are daunting for many educators and hobbyists, consumables (helium and balloon) account for less than 1/3 of total costs. Therefore, each new flight is significantly cheaper after a previous, successful recovery.  JavaScript charts generated with Highcharts. Special thanks to Ryan Hartsock for having the bright idea that solved finishing the 'drilldown' pie graph!

Build components (prices in $USD)
---

The three major components of HAB_0 are the balloon, the recovery parachute, and the payload that houses sensors, cameras, and tracking devices. The balloon is a 1000g balloon ($85; Kaymont) filled with ~100 cubic ft of helium (200 cubic ft ~$265; Airgas). With an ascent rate of 890-1000ft/min to a payload of 2-4lbs, the balloon should reach ~100k-110K feet. The recovery parachute has a 4 ft diameter ($45; Rocketman Enterprises Inc.) and supplies an 18ft/sec descent rate.  The payload includes three major components: a *sensorDrone* sensor (unavailable), a GoPro Hero2 video camera (~$300 with battery backpack and LCD backpack (useful for testing); GoPro), and a trackuino tracking device (total ~$200; multipart assembly required) that receives GPS coordinates via satellite and transmits the location and altitude values to the user on the ground via HAM radio. All members of the HAB_0 crew are licensed with some form of the Amateur Radio license in the United States. The trackuino is made of a custom printed circuit board ($30 for minimum order of three; OSHPark), various electrical components listed in our build of materials ($45, Mouser), a Venus GPS with SMA connector to recieve GPS signal ($55; Sparkfun), an Hx1 VHF transmitter ($50; Lemos International) to send signal to ground antennae, and a custom built antenna ($15, any local electronics store). The power for the trackuino is supplied by lithium battery pack for an estimated total of 12 volts ($30; local battery outlet). A balsa wood and styrofoam fin is added to aid in aerodynamic stability of the payload. A counter weight to the fin includes Spike, the Truman State University mascot.

After and before photos of printed circuit board assembly
20141201_000033APRS-enabled radio tracking of payload test
