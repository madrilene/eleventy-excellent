---
title: "Precision Time Protocol That You Love"
description: ''
date: 2022-10-02 22:44:33.004000+00:00
---

*[Tom Waits - "Time" (1985)](https://www.youtube.com/watch?v=VhWTDvPLGTE)*

Getting Informed
================

This week we take a look at Network Time Protocol (NTP), Precision Time Protocol (PTP), Time Appliance Project (TAP), and Time as a Service (TaaS). We’re going to stay in the realm of time much larger than the ~11.8 inch distance that light can travel in a ns (aka a [Grace Hopper “nanosecond”](https://www.youtube.com/watch?v=9eyFDBPk4Yw)) but we will stay within the realm of the ~984 foot distance that light can travel in a µs (aka a [Grace Hopper “microsecond”](https://www.youtube.com/watch?v=9eyFDBPk4Yw)).

Subscribe to Fudge Sunday! 🤓

Ooooooops?And the shadow boys are breaking all the laws 🎶
-----------------------------------------------

First, you might have noticed the recent piece in The New Yorker on the origins and implications of Network Timer Protocol (NTP). 

(https://twitter.com/NDHopper/status/1575829685295992832?s=20&t=MS-feaHFj5EV0GsKHjajNg)[12:47 PM ∙ Sep 30, 2022

---

13Likes3Retweets](https://twitter.com/NDHopper/status/1575829685295992832?s=20&t=MS-feaHFj5EV0GsKHjajNg)In the YouTube video below, you can hear directly from the jolly old elf, David Mills, himself — you just fast forward to the 34m:50s mark for the NTP moment.[1](#footnote-1) Or, if you start from the beginning of the video and stay until the end you can also learn about the various foundational protocols that make consuming this newsletter possible on the device you are using to access it right now.

And the rain sounds like a round of applause 🎶
----------------------------------------------

Second, in the world of quantified pursuits, there is an ongoing perceived need for greater repeatable outcomes in repeated measurements. We can refer to this quality of having closely grouped measurement using a simple word: precision.[2](#footnote-2)

So, what happens when you need more precision in your network time protocols? Well, if you’re the IEEE, you’ve thought about that for quite some... 🤓 time.[3](#footnote-3)

It's raining hammers, it's raining nails 🎶
------------------------------------------

Third, you might ask a simple question. What’s in (or on) the cards? 

A lot actually — and the software too[4](#footnote-4). As mentioned in Fudge Sunday previously, IIoT means there will be a growing number of use cases where Ultra-Reliable Low Latency Communications (URLLC) is required and the enablement barriers will be a fascinating study of when, not if, they will fall away.

(https://sunday.fudge.org/p/make-iiot-easy-on-yourself?utm_source=substack&utm_campaign=post_embed&utm_medium=web)Just consider that access to precision time protocol has come to the hobbyist community. Indeed… What a time to be alive! (pun intended)

And their memory's like a train 🎶
---------------------------------

Fourth, now, it's worth taking an open standard view for what we think of as a traditional datacenter and the microdatacenters that will be closer to us at the edge of the network. This video from Open Compute Project goes into more detail on the Time Appliance Project (TAP)[5](#footnote-5).

As the dish outside the window fills with rain 🎶
------------------------------------------------

Fifth, there are already commercial options for Time as a Service (TaaS) in the ~50 µs accuracy[6](#footnote-6) range. Then again, sometimes the need for coordinating industrial outcomes means requirements closer to ~1 µs.

Of course, there are many other use cases where accuracy and precision are not as stringent of a requirement. There are also other considerations for use cases where leap seconds, smearing[7](#footnote-7), a good enough roughtime[8](#footnote-8), and other concepts can be explored.

Expect more TaaS and similar concepts to emerge when NTP, PTP, and time related concerns are considerations. For example, this year I noted these AWS [insert cool project name here] stats for re:Invent session catalog[9](#footnote-9) that will all have interesting time service considerations:

* AWS Ground Station (2)
* AWS Wavelength (3)
* AWS Nitro Enclaves (6)
* AWS Nitro System (9)
* AWS Elemental (10)
* AWS Local Zones (14)
* AWS Outposts (24)

And at this point, you might be wondering about the human side of this topic. If so, consider the latency sensitivity of audio as compared to the latency sensitivity for video.

Check out this video from Stanford University on the human perception of milliseconds (ms) as compared to 1000s of µs.

Also, if you wonder how the time synchronization of audio and video streaming over IP networks could be handled, this is one reason why the Society of Motion Picture and Television Engineers exists. For example, SMPTE ST 2110[10](#footnote-10) standards are what drives features for [where PTP logically fits into services and solutions like AWS Elemental](https://docs.aws.amazon.com/elemental-live/latest/ug/enable-ptp.html).

Now, imagine the next big use case that will challenge expectations for time sensitive networking. From what domain(s) will the use case originate?

Until next time… Place your bets!

Disclosure
==========

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).

[1](#footnote-anchor-1)Watch: <https://youtube.com/clip/UgkxlbaWw8R7fJBfxhZFepzTKRqOZqCxzmXq>

[2](#footnote-anchor-2)Watch: [Nice Grouping](https://www.youtube.com/watch?v=8BF95hdIuOg)

[3](#footnote-anchor-3)Read: <https://en.wikipedia.org/wiki/Precision_Time_Protocol>

[4](#footnote-anchor-4)Read: [A Guide to the Silicom Time Sync (STS) Operator on OpenShift](https://cloud.redhat.com/blog/a-guide-to-the-silicom-time-sync-sts-operator-on-openshift)

[5](#footnote-anchor-5)Read: <https://www.opencompute.org/projects/time-appliances-project-tap>

[6](#footnote-anchor-6)Read: [Equinix Precision Time](https://www.equinix.com/services/digital-infrastructure-services/equinix-precision-time) 

[7](#footnote-anchor-7)Read: <https://developers.google.com/time/smear>

[8](#footnote-anchor-8)Read: <https://roughtime.googlesource.com>

[9](#footnote-anchor-9)Search: <https://portal.awsevents.com/events/reInvent2022/sessions>

[10](#footnote-anchor-10)Read: <https://en.wikipedia.org/wiki/SMPTE_2110>

