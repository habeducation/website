---
layout: page
title: Cost breakdown
---

# Cost and materials

While the total cost of HABs are daunting for many educators and hobbyists, consumables (helium and balloon) typically account for less than 1/3 of total costs. Therefore, each new flight is significantly cheaper after a previous, successful payload recovery.

The three major components of a latex high altitude balloon project include the balloon with lifting gas, recovery parachute, and payload that houses sensors, cameras, and tracking devices. A typical balloon is a 1000g balloon ($85; [Kaymont](http://www.kaymontballoons.com/Near_Space_Photography.html)) filled with ~100 cubic ft of helium (200 cubic ft costs ~$265, but prices are remarkably variable due to the scarcity of helium; For the Saint Louis, MO region see [Airgas](https://www.airgas.com) or [Cee Kay](http://ceekay.com) ). Hydrogen gas is often a cheaper alternative, but it requires extraordinary safety precautions given its flammable nature. With an ascent rate of 890-1000ft/min to a payload of 2-4lbs, the balloon should reach ~90k-110K feet with a total flight time of 2.5-3 hours.

The recovery parachute typically ranges from 4ft-7ft in diameter depending on the weight of your payload ($45-$80; [Rocketman Enterprises Inc.](http://www.the-rocketman.com/recovery.html)).  

The payload includes three major components: sensors to collect atmospheric data such as temperature, pressure, humidity, acceleration, and/or ozone, a video camera or cameras (~$130-$200 each), and a tracking device (~$200). Batteries that perform in the cold conditions of nearspace are required (i.e alkaline batteries are not appropriate for most HAB applications). Lithium batteries, especially the AA Energizer L91, work well during our flights.

Notes on tracking: We often use the [Trackuino](https://github.com/trackuino/trackuino), a device that requires multipart ordering and assembly. It is a great way to get started with electronics/coding/soldering, and we have hosted workshops to build it. Trackers receive GPS coordinates via satellite and transmit the location and altitude values to users on the ground via HAM radio. This requires at least the entry level amateur radio operators license. Check with your [local amateur radio hobbyists](http://www.arrl.org/find-an-amateur-radio-license-class) to learn more. They may be willing to help you with tracking. 

At the time of this writing, the current Trackuino is made of a custom printed circuit board ($30 for minimum order of three; [OSHPark](https://oshpark.com)), various electrical components ($45, [Mouser](http://www.mouser.com)), a Venus GPS with SMA connector to recieve GPS signal ($55; [Sparkfun](https://www.sparkfun.com)), an Hx1 VHF transmitter ($50; [Lemos International](http://www.lemosint.com)) to send signal to radio devices on the ground, and a 2-meter antenna (~$20 at any local electronics store). The power for the trackuino is supplied by a lithium battery pack for an estimated total of 12 volts ($30; any local battery outlet). 

Additional tracking devices of various sophistication include those made by SPOT ([SPOT](http://www.findmespot.com/en/) ~$120) and Bionics such as the Micro-Trak RTG FA High Altitude Combo ([Byonics](http://www.byonics.com/mt-rtg)).