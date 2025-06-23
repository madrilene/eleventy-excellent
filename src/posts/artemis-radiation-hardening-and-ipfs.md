---
title: "Artemis, Radiation Hardening, and IPFS"
description: ''
date: 2022-09-04 21:54:41.790000+00:00
---

Getting Informed
================

As I was thinking about the topic for this newsletter post, NASA’s Artemis 1 launch got pushed back a bit. So, that provides more opportunity to focus on radiation hardening and IPFS.

NASA @NASA#Artemis Update: The team continues to troubleshoot, and plans to return with a variety of options early next week. We are standing down on any launch attempts through the current launch period, which ends Tuesday.

See [blogs.nasa.gov/artemis](http://blogs.nasa.gov/artemis) for more information. ![The Space Launch System rocket stands upright on the launchpad. The background is the late afternoon sky dominated by towering clouds. The rocket has an orange central fuel tank with two white rocket boosters on either side. The rocket is reflected in the water in the foreground of the image, framed by marsh grass. Between the water and the rocket is a parking lot with over a dozen parked cars. Photo credit: NASA/Bill Ingalls⁣⁣

](https://cuthrell.com/favicon.png)](https://twitter.com/NASA/status/1566179789211402242?s=20&t=NjmkPrPa2mUcvBPSq5Qz5g)[9:42 PM ∙ Sep 3, 2022

15,897Likes2,161Retweets](https://twitter.com/NASA/status/1566179789211402242?s=20&t=NjmkPrPa2mUcvBPSq5Qz5g)Now, brace yourselves for maximum YouTube videos and Tweets in this newsletter post. Put on your propeller hat, grab a slide rule, and… well, start the countdown.

Thanks for reading Fudge Sunday! Please Subscribe for to receive new posts.

Fly me to the moon 🎶
--------------------

First, let’s remember… our planet Earth is amazing, wonderful, and hospitable to living things (what most people would agree is our shared definition of life as we know it) and our stuff (technology and things we’ve made). So, Earth is our awesome spaceship for living things and our stuff all move around the solar system, galaxy, and universe.

And yet, this awesome spaceship that is very hospitable is surrounded by not so hospitable space weather and a radiation belt. So, check out this next video that details the impact to living things and our stuff from what’s outside our spaceship.

Until dramatic dystopian sci-fi plot device textbooks[1](#footnote-1) become future reality textbooks that tell me differently, I believe we landed on the moon. Now, it's time to send probes and get ready to return people to the moon with bagged lunches to stay a bit longer than last time — and continuously iterate.


> With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before. We will collaborate with commercial and international partners and establish the first long-term presence on the Moon. Then, we will use what we learn on and around the Moon to take the next giant leap: sending the first astronauts to Mars.[2](#footnote-2)
> 
> 

Payloads will help us understand what our stuff is in for. Payloads will also help us understand what we’re in for as living things. 

Let me play among the stars 🎶
-----------------------------

If you haven’t thought about radiation hardening[3](#footnote-3), just remember that going into space for a long time requires far more planning than just the math and physics of rocketing into space itself. As such, radiation hardening is fascinating as a topic because it has materials science, hardware design, and software design considerations with real world engineering, supply chain, and economics implications.

(https://twitter.com/anildash/status/1366931110752567297?s=20&t=wMmadh2wv70xWatBgd2ZgA)[1:59 AM ∙ Mar 3, 2021


41Likes9Retweets](https://twitter.com/anildash/status/1366931110752567297?s=20&t=wMmadh2wv70xWatBgd2ZgA)Pavol Rusnak 🍯🦡 @pavolrusnakDid you know that James Webb Space Telescope runs on RAD750?

It's a $200,000 radiation-hardened single-board computer based on PowerPC 750 running at 118 MHz, first released over 20 years ago in 2001.

For comparison, a $35 Raspberry Pi 4 released in 2019 is around 35x faster.](https://twitter.com/pavolrusnak/status/1480299213443383297?s=20&t=wMmadh2wv70xWatBgd2ZgA)[10:03 PM ∙ Jan 9, 2022

301Likes67Retweets](https://twitter.com/pavolrusnak/status/1480299213443383297?s=20&t=wMmadh2wv70xWatBgd2ZgA)Rob Thacker @DrRob\_ThackerRegular peeps: wow the #JWST image storage system is a puny 68GB. 

Astro peeps: holy smokes #JWST has 68GB of radiation hardened storage, that's 30x more than the Curiosity rover!

It's hard to run computers in high radiation environments! ![james webb space GIF by NASA](https://substackcdn.com/video/upload/e_loop,vs_40/kgwe4gdn6nnmeghsafsb.gif)](https://twitter.com/DrRob_Thacker/status/1550980072307363843?s=20&t=wMmadh2wv70xWatBgd2ZgA)[11:03 PM ∙ Jul 23, 2022


12Likes2Retweets](https://twitter.com/DrRob_Thacker/status/1550980072307363843?s=20&t=wMmadh2wv70xWatBgd2ZgA)Tren Griffin @trengriffin@Simon\_Fabbri @VirtuallyNathan @mikepuchol @larrypress @mtaht @SpaceX @Megaconstellati @danyork @jane\_coffin Serve all markets means what? Includes Polar? How much capacity? 38X is based on what assumptions? 

Every LEO satellite is usable only a fraction of the time. They circle the Earth. Lifetime of a LEO at that altitude without expensive radiation hardened electronics is ~ 5 years.](https://twitter.com/trengriffin/status/1563935603053723648?s=20&t=wMmadh2wv70xWatBgd2ZgA)[5:04 PM ∙ Aug 28, 2022](https://twitter.com/trengriffin/status/1563935603053723648?s=20&t=wMmadh2wv70xWatBgd2ZgA)(https://twitter.com/Dr_StefaniaP/status/1491727854635159552?s=20&t=wMmadh2wv70xWatBgd2ZgA)[10:56 AM ∙ Feb 10, 2022


13Likes3Retweets](https://twitter.com/Dr_StefaniaP/status/1491727854635159552?s=20&t=wMmadh2wv70xWatBgd2ZgA)Fill my heart with song 🎶
-------------------------

This video explains why a radiation tolerant Ethernet switch is a thing. It’s not just cool, it’s *space conformant*.

Of course, in addition to networking there will be similar design considerations for compute, storage, software, solutions, systems and the lifecycle evolutions of each. This is serious stuff.

And you might be saying… Surely Jay, you can’t be serious. 

Indeed, I am serious. This means we need to think about not just the Bobby Pin but the procedures too.

And don’t call me Shirley.🤭

So, about those procedures… what if there isn’t a Commander Murdock to read us back the procedure or it is so far away that it would mean several minutes (years[4](#footnote-4)) of latency as we wait for packets of information to arrive and be reconstituted as text or multimedia?

In other words, please be true 🎶
--------------------------------

Now, if the hardware can survive, then what is the software solution to get the data up there and everywhere in the vastness of space — including procedures? 

First, let’s consider the World Economic Forum speakers this year included… a conversation from Space. *(fast forward to the 35 minute mark if you can’t resist)*

Now, back to the procedures question...

One likely answer to getting procedures where we'll need them is the Interplanetary File System, or IPFS[5](#footnote-5) for short. It turns out that the folks at Lockheed Martin will (soon) publicly demonstrate a variety of non-terestrial convergence enabling decentralization use cases for IPFS deployment in support of in Space economies. 

What was the punchline heard by Davos attendees? 

*IPFS is finally going interplanetary*.

There’s a lot packed into this explainer. It’s important to understand and sometimes analogies can be helpful even if they are technical analogies.

When people ask me for a definition of IPFS, I ask them if they have heard of content delivery networks like Akamai. If they say yes, I say this:

Think of IPFS as an open way to enable an “Akamai in the Sky” on planets and exoplanets… or as ZZ Top’s Billy Gibbons might say… “and all points in between”.

The net effect: *Procedures that matter can be everywhere it will matter.*

Lastly, it should go without saying… IPFS, like any technology, isn’t immune to being used for illicit things and bad actors doing bad things[6](#footnote-6) in hopes of being persistent across multiple surfaces in multiple places. As such, the the enduring corpus of malware vector for IPFS will also require solutions as with other technologies.

And one last last thing… it appears that it will take a lot of energy to get things into space. So, as someone that followed railgun[7](#footnote-7) approaches, I found this video of an endeavor addressing the Tsiolkovsky rocket equation[8](#footnote-8) to be really fascinating if you consider the amount of cargo, payloads, and stuff (data centers?) we may desire to carefully catapult into the deepest regions of space.

Until next time… Place your bets… (from off-world?)

*Special thanks to [Trevor Pott](https://www.linkedin.com/in/trevorpott/) for reviewing drafts of this issue!🙏🤓*

Disclosure
==========

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).

[1](#footnote-anchor-1)Spoiler Alert: [Interstellar books scene](https://www.youtube.com/watch?v=hBaiyzj5wdc)

[2](#footnote-anchor-2)Read: <https://www.nasa.gov/specials/artemis/>

[3](#footnote-anchor-3)Read: <https://en.wikipedia.org/wiki/Radiation_hardening>

[4](#footnote-anchor-4)Spoiler Alert: [Interstellar “you’ve got mail” scene](https://www.youtube.com/watch?v=dxF1PA8RQgU)

[5](#footnote-anchor-5)Read: <https://docs.ipfs.tech/concepts/what-is-ipfs/#what-is-ipfs>

[6](#footnote-anchor-6)Read: [IPFS and Phishing](https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/ipfs-the-new-hotbed-of-phishing/)

[7](#footnote-anchor-7)Watch: [Rail Gun at NASA (2012)](https://www.youtube.com/watch?v=AuCGlwoAtp8)

[8](#footnote-anchor-8)Math: <https://www.wolframalpha.com/input?i=Tsiolkovsky+rocket+equation> 

[9](#footnote-anchor-9)Read: <https://en.wikipedia.org/wiki/Media_access_unit>

