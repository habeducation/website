---
layout: post
title:  Cost breakdown of our HAB_0 balloon
date:   2015-03-18 08:43:59
author: Dustin Mayfield-Jones
tags:	Launches
launch: hab\_0
---

## Introduction


While the total cost of HABs are daunting for many educators and hobbyists, consumables (helium and balloon) account for less than 1/3 of total costs. Therefore, each new flight is significantly cheaper after a previous, successful recovery.  JavaScript charts generated with Highcharts. Special thanks to Ryan Hartsock for having the bright idea that solved finishing the 'drilldown' pie graph!

Build components (prices in $USD)
---

The three major components of HAB\_0 are the balloon, the recovery parachute, and the payload that houses sensors, cameras, and tracking devices.

* The balloon is a 1000g balloon ($85; Kaymont)
* Helium to fill baloon with ~100 cubic ft of helium (200 cubic ft ~$265; Airgas).
* The recovery parachute has a 4 ft diameter ($45; Rocketman Enterprises Inc.) and supplies an 18ft/sec descent rate.
* a *sensorDrone* sensor (unavailable)
* GoPro Hero2 video camera (~$300 with battery backpack and LCD backpack (useful for testing); GoPro)
* trackuino tracking device (total ~$200; multipart assembly required)
* The trackuino is made of a custom printed circuit board ($30 for minimum order of three; OSHPark)
* various electrical components listed in our build of materials ($45, Mouser)
* a Venus GPS with SMA connector to recieve GPS signal ($55; Sparkfun)
* a Hx1 VHF transmitter ($50; Lemos International) to send signal to ground antennae
* a custom built antenna ($15, any local electronics store)
* The power for the trackuino is supplied by lithium battery pack for an estimated total of 12 volts ($30; local battery outlet)
* A balsa wood and styrofoam fin is added to aid in aerodynamic stability of the payload. A counter weight to the fin includes Spike, the Truman State University mascot.

With our setup, we expected an ascent rate of 890-1000ft/min to a payload of 2-4lbs, the balloon was predicted to reach ~100k-110K feet.


{% include cost_breakdown.html %}
