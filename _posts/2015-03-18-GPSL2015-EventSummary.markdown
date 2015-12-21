---
layout: post
title:  "Great Plains Super Launch 2015 conference notes"
date:   2015-03-18 08:43:59
author: Dustin Mayfield-Jones
tags:	Launches
launch: GPSL2015
---

# Great Plains Super Launch 2015


## Paul Verhage - Transatlantic attempts

Paul Verhage opened the session with a talk on a transatlantic attempt, six
Washington student launches, four for Idaho, and a workshop for teachers about
BalloonSats.

The transatlantic, latex flight launched with three ounces of lift in the late
afternoon. It used a tinytrack. Using lead weights for balance, it drifted all
night. Electronic tracking shut down reportedly from the cold. Cameras were too
cold to operate, but interestingly, the GoPro continued to work. Paul explained
how it may be the metal casing that allows GoPro cameras to withstand
conditions even outside the payload. We later tried this with our GPSL2015
flight, and got good results to at least our maximum altitude of ~314,000ft /
3440 m. Also, apparently it is a known issue with the Canon cameras that they
can interfere with radio. Simply covering it with aluminum foil should fix the
problem. This launch got good media coverage. Paul also suggested protecting
the latex from degradation with a covering like mylar or metal coating. The
best time to access the strongest winds is during the end of November to the
end of March. Mark Connor, a meteorologist, helps predict weather to determine
when to launch. Paul discussed the balloons needed for these sorts of flights.
Ideal sizes like the 4K-6k gram balloons are in the $400 dollar range, but one
can use as low as a 1000g balloon. There is data somewhere to show how the
smaller balloons do not allow for superpressure. From my research, much of the
pressure calculations come from the expertise of Joe Mayenshein, Mike Manes,
and Jerry Gable.

Paul mentioned his Idaho schools launch with the Cascade Science Class.

Paul described how 4th graders helped design the experiment to test if rubber
bands could hold down hatches during flights. It worked. Good ideas can come
from many places, especially while teaching.

He then explained the UNO Aerospace Education Workshop for teachers. By making
teachers build it, they become comfortable with HABs and can then be ready to
take them into their classrooms. He also described the goals of his
conferences: to aquaint teachers with the existence and benefits of
BalloonSats. Only $170 consumables. Gas may be available for free for many
schools. Some schools block out an entire Friday for a flight day. Overall,
this gives students STEM experience and allows them to travel where they cannot
go in person.

I was excited to hear about the “Near Space Explorer,” a journal for publishing
student work with HABs.

Future projects included: The “Near Space Explorer,” PICAXE
electronics/programming trainer, CubeSat trainer, expanded BalloonSat kits, and
BalloonSats without Borders (like Doctors without Borders, but with HABs).

## Mel Whitten, Digital Video Broadcasting

Mul Whitten gave a first-class talk about digital video broadcasting
(DVB) that was impressive and informative. He briefly gave background on the
history of advances in file compression formats that have ultimately led to
DVB. DVB was introduced in the UK in 1998, and while the USA has its own TV
standard, HAMs prefer DVB over ATSC for its preferred transmission over narrow,
robust bands and its low cost. ATSC is 5-10x more costly than DVB. Another
issue is ATSC is patented, and each HDTV pays ~$50 to use it. DVB is
opensource. Uses of DVB include digital signage or super local broadcasting.

Did you know MPEG stands for Motion Picture Expert Group and it uses prediction
with movement compensation? This means, MPEG takes groups of pictures to
estimate and reduce data required for each individual picture. Elementary
streams are then further compressed.

DVB uses forward error correction to correct for noise bursts, but the more you
add, the more latency. In other words, you wait longer from the time the image
is recorded until you see it on the screen. The advantage here is that compared
to analog, with digital video broadcasting, one can control this latency.

Some ideas I had never heard of: COFDM (coded orthogonal frequency division
multiplexing) and guard intervals.

Then he elaborated on how to get on the air with DVB. He mentioned a great
Taiwanese design house: ITE. Their product has API available to code your own
stuff.

For a USB modulator/demodulator, see the HIDES UT-100B. It doesn’t get much
easier. Broadcasting at 1080p HD.264.

Get a camera, like the HiDes DC-103, with 1080p, it weighs only a few ounces
and is ~2in cubed. It only runs a few milliwats. It has a programmable
frequency and uses an embedded linux OS.

So in review, a PC with Win7 or 8 is a given, add camera like DC-103, a
transmitter/reciever like the UT100 dongle and a Yagi antennae. He also talked
about other “wheel antennae.”

He uses a OE7DBH amplifier, or use Mitsubishi mosfit brick.

Some HAMs will use analog video to get to the P2 level and then switch to
digital.

There is also a system called BATC which is a digipeater that allows for DVB,
sort of like the UStream for HAM operators.

## Bill Brown, Pico Balloons


Bill Brown talked next about Pico Balloons, and Leo Bodnar (M0XER), a
cold-temperature lipo pack that can be ordered custom, for a price.

He talked about Alan Adamson’s peach-2 build, an open source radio with code
available on github. It is totally powered by solar. For solar power use in
general, look at PowerFilm. He discussed how to get materials for highpressure
balloons; a Japanese company makes a nice material but they sell it in minimal
quantities of 1000 sq. ft rolls. Mylar can be purchased from
balloonsdirect.com.

He described the WSPRnet, a Weak Signal Propagation Reporter Network, and its
possibilities for pico balloons.

He described Ron in California’s mass-flow reader. An expensive item that
allows for precise balloon filling. He described the need for a pressure
release valve with specs like a flat, plastic drinking straw.

He then showed off his Iridium satellite-based tracking system. He mentioned
the Tracker9 available from radiobro, but I have had a hard time finding more
information on this.

For radio direction finding, he mentioned two transmitters: the SquawkBox
T-hunt and the MicroHunt T-hunt.

## Phil Bunch, Radio Direction Finding

Phil Bunch gave a nice introduction to radio direction finding. Later, he
helped us look for Carlton Corbitt’s payload and our balloon.

## Atom, RoboMo Drones

Atom from RoboMo gave an really great talk on drones in general. We talked
about how drones could help with the balloon recovery, but I was most excited
about seeing his live demo and the discussion about what tech is currently
available under $2k. I was impressed how he pulled the drone out of the air.

## Bill Coby, Digital Photography

Finally, Bill Coby provided an introductory talk on digital photography.
While trying to compress an entire semester of study into one short talk, Bill
talked about apertures, the rule of thirds, separating the flash from your
camera to reduce red eye, focus, filling your image with the important stuff,
and much more. I wish we could have worked on some images from HAB flights
together. He showed us videos he helped script and talked a little about some
of the great experiences photography has afforded him over a long career.
