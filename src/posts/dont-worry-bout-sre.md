---
title: "Don't Worry 'Bout SRE"
description: ''
date: 2022-11-28 00:42:04.765000+00:00
---

Music: [*Frank Sinatra - “Don’t Worry ‘Bout Me” (1966)*](https://www.youtube.com/watch?v=twoRSUbHW-k)

Getting Informed
================

This week our topic comes from [Substack Chat](https://sunday.fudge.org/chat). 🤔🙏🤓

Thanks for reading Fudge Sunday! Subscribe for free to receive new posts and support my work.

***Is it realistic to worry if systems like Twitter will go down without SRE support?***

***What kinds of cloud support requires human intervention and what is just automatic?***

First, let’s start with a quick definition for Site Reliability Engineering (SRE). “SRE is what you get when you treat operations as if it’s a software problem” per Google.

Next, I’ll explore both questions posed in this topic as they relate to SRE and the junction of human intervention and automation. Strap in tight.

Why not call it a day, the sensible way 🎶
-----------------------------------------

Is it realistic to worry if systems like Twitter will go down without SRE support?

It’s reasonable to take precautions with any feature of any platform — including Twitter — that assumes an extended SRE reduction that prevents timely response to feature uptime impacting incidents can become a longer term condition.

I make the distinction about the feature of any platform for a reason. Specifically, if you recall from the SRE Engagement Model[1](#footnote-1), there are service lifecycle considerations.

Some early Twitter users from 2007-2012 might recall the early scaling challenges and the fail whale. Now, a decade later, the fail whale is a far more rare sighting[2](#footnote-2) that has been replaced with more subtle degradation of feature availability to manage user experiences.

(https://twitter.com/stop/status/266040874549526528?s=20&t=4Pg0RsyK6hTLW7qIea0KwQ)

[RIP, Fail Whale.](https://twitter.com/stop/status/266040874549526528?s=20&t=4Pg0RsyK6hTLW7qIea0KwQ)

[4:54 AM ∙ Nov 7, 2012](https://twitter.com/stop/status/266040874549526528?s=20&t=4Pg0RsyK6hTLW7qIea0KwQ)


[149Likes160Retweets](https://twitter.com/stop/status/266040874549526528?s=20&t=4Pg0RsyK6hTLW7qIea0KwQ)

From a completely speculative point of view, SRE shifting to focus on the error budgets[3](#footnote-3) of the service lifecycle for new features could come at the expense other existing features. Or, for short, *what was deemed important* to the existing user (you?) *may become far less important* to any company that shifts focus to the attraction of the new user (not you?) associated with top line revenue growth.

Recent newsworthy outages for Twitter in the range of 45 minutes[4](#footnote-4) are useful to compare to both the duration (hours) and frequency of the early years. As such, prior pontification and speculation on massive outages[5](#footnote-5) are less likely than incremental shifts in SRE priorities.

For what it’s worth, the last tweet from “TwitterSRE” was over a year ago and “TwitterEng(ineering)” was over a month ago. Clearly, there are other priorities outside of tweets from the SRE and Engineering teams left at Twitter now.

(https://twitter.com/TwitterSRE/status/1458586120187355140?s=20&t=7Ts1f-nqZkgYGy9I3LEm4g)

[Join us online next Wednesday 11/17 @ 6PM PT / 7:30AM IST for our last #SRE meetup of 2021! @NuttySwiss will present on #turndown mechanics for #legacy #systems, from simple to large complex #services! RSVP:](https://twitter.com/TwitterSRE/status/1458586120187355140?s=20&t=7Ts1f-nqZkgYGy9I3LEm4g)

(https://twitter.com/TwitterSRE/status/1458586120187355140?s=20&t=7Ts1f-nqZkgYGy9I3LEm4g)


11Likes6Retweets

(https://twitter.com/TwitterEng/status/1583470012202815488?s=20&t=7Ts1f-nqZkgYGy9I3LEm4g)

[What is your favorite metasyntactic variable?](https://twitter.com/TwitterEng/status/1583470012202815488?s=20&t=7Ts1f-nqZkgYGy9I3LEm4g)

[2:47 PM ∙ Oct 21, 2022](https://twitter.com/TwitterEng/status/1583470012202815488?s=20&t=7Ts1f-nqZkgYGy9I3LEm4g)


[46Likes4Retweets](https://twitter.com/TwitterEng/status/1583470012202815488?s=20&t=7Ts1f-nqZkgYGy9I3LEm4g)

As for me, I was a user of Twitter for over a decade and traded in Twitter shares when they were a public company. I have no insider information, know exactly *nobody* at Twitter now, and made my personal decision about gradually diminishing my Twitter use well over five years ago .

That said…

For **any** company that has built and staffed their own SRE team or outsources their SRE team, there is the risk of staff turnover and operating capital to meet payroll and pay the bills. Indeed, a sudden en masse SRE resignation that is compounded by a decline in revenue that impacts paying the bills for the SRE as a Service provider that is used to outsource SRE roles to a third party… or the inability to *find* and reliably pay any of the colocation bills, cloud bills, domain name registration renewals, etc… etc… would be the proverbial nail[6](#footnote-6) of both permantently offline and presently still online Internet legends.

Look out for yourself should be the rule 🎶
------------------------------------------

What kinds of cloud support requires human intervention and what is just automatic?

Cloud support that requires a human intervention is typically when a case (ticket) is successfully opened after satisfying the required disposition coding or mandatory triage categories. This assumes the cloud support website or portal itself is functional.



Google Cloud Customer Care Portal for example…

The requirement for humans varies. More human intervention is required when automation adoption based upon quantitative measurements is lower or deferred by favoring qualitative observation, individual decisions, and bespoke actions.

To unpack that a bit more, consider that qualitative observations are subjective. Disposition is the determination of when an issue is raised (a ticket!) that a human might be responsible for bringing to resolution.

*[ sarcasm ]* No ticket? No problem! Mission accomplished! *[ / sarcasm ]*

On the other hand, getting your now *benign end user activity* caught up in the previously determined *suspicious end user activity* window for a crudely tuned spatial or temporal parameter will subjectively be a pain the rear end. So anyone that has felt the arbitrary hand of automation gone awry will nod their head on this cloud condition as they attempt to communicate with their cloud service provider, managed service provider, or colocation provider to begin manual attestation of identity to resolve and get back to work again.

Now imagine that last paragraph in the wake of sustained or seemingly stochastic key staff turnover.

Now imagine new machines, new keys[7](#footnote-7), new networks, and new process drift during the timespan associated with all of these items.

Now imagine previously moving exabytes of data[8](#footnote-8) around to reflect new company goals.

Now imagine any or all of these decisions needing to be altered or reversed.

As a background, it’s useful to call back to a prior topic from June 2022: [POSSE is my goal to AOYP and RYO](https://sunday.fudge.org/i/59528127/posse-is-my-goal-to-aoyp-and-ryo). Or, for short, if your content lives on a platform run by someone else then you should make regular backups of what you can.

The reason I share this advice isn’t because I am rooting for the demise of any service in particular like Twitter. It’s just realistic because human beings are also notoriously unreliable things[9](#footnote-9) and they are likely to change careers if not their minds about what, subjectively, is important over time.

Lastly, it is important to remember that burnout is real. So, big #hugops to any SRE teams that stay, join in the future, or find themselves running and maintaining legacy scripts that arrived in their digital laps with less than precise usage guides that are now lacking in deep dependency mapping.

(https://twitter.com/GergelyOrosz/status/1596848885405728768)

[Even though I am a tiny ad spender, I also noticed ads being glitchy. As I talked with current software engineers at Twitter, they told me the eng team was fired, systems are transferred to a new team w little context & the eng taking it over just got a performance warning.](https://twitter.com/GergelyOrosz/status/1596848885405728768)

(https://twitter.com/GergelyOrosz/status/1596848885405728768)

[Two years ago, I ran my first and only Twitter ad, where I promoted a tweet with ~8,000 impressions. Today, Twitter locked my account & informed that my account is in violation of policies and I'm not eligible to run ads, going forward. Who is running what scripts at Twitter? https://t.co/CRPbdK1u2b](https://twitter.com/GergelyOrosz/status/1596848885405728768)

[12:50 PM ∙ Nov 27, 2022](https://twitter.com/GergelyOrosz/status/1596848885405728768)



---

[116Likes8Retweets](https://twitter.com/GergelyOrosz/status/1596848885405728768)

So, what will be the next online service feature that gets deprecated or go offline?

Until then… Place your bets!



Be like Kermit y’all

Disclosure
==========

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).

[1](#footnote-anchor-1)

Read: [Google - Site Reliability Engineering](https://sre.google/workbook/engagement-model/)

[2](#footnote-anchor-2)

Read: [How Twitter Slayed the Fail Whale](https://business.time.com/2013/11/06/how-twitter-slayed-the-fail-whale/)

[3](#footnote-anchor-3)

Read: [How maintenance windows affect your error budget](https://cloud.google.com/blog/products/management-tools/sre-error-budgets-and-maintenance-windows)

[4](#footnote-anchor-4)

Read: [Twitter experiences longest global outage in years](https://www.theguardian.com/technology/2022/jul/14/twitter-experiences-longest-global-outage-in-years)

[5](#footnote-anchor-5)

Read: [Here’s how a Twitter engineer says it will break in the coming weeks](https://www.technologyreview.com/2022/11/08/1062886/heres-how-a-twitter-engineer-says-it-will-break-in-the-coming-weeks/)

[6](#footnote-anchor-6)

Read: [For Want of a Nail](https://en.wikipedia.org/wiki/For_Want_of_a_Nail)

[7](#footnote-anchor-7)

Read: [How we rolled out security keys at Twitter](https://blog.twitter.com/engineering/en_us/topics/insights/2021/how-we-rolled-out-security-keys-at-twitter)

[8](#footnote-anchor-8)

Read: [Scaling data access by moving an exabyte of data to Google Cloud](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2022/scaling-data-access-by-moving-an-exabyte-of-data-to-google-cloud)

[9](#footnote-anchor-9)

Watch: [Machines of Loving Grace: Butterfly Wings](https://www.youtube.com/watch?v=XEt86vB1seU)

