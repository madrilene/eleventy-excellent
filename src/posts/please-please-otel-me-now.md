---
title: "Please Please OTel Me Now"
description: ''
date: 2022-10-17 01:06:39.320000+00:00
---

*[Duran Duran - Is There Something I Should Know? (1982)](https://www.youtube.com/watch?v=3M0hogZyRyU)*

Getting Informed
================

If you are new to OpenTelemetry — or “Otel” for short — that’s understandable. You might have come across application performance management companies, tools, techniques, or even projects like OpenTracing[1](#footnote-1) or OpenCensus[2](#footnote-2) that predate Otel.

Please subscribe to receive new posts 🤓

In my defense, Duran Duran is less meme-worthy than Nickelback I made a break, I run out yesterday 🎶
-------------------------------------

During the .com years, it was common to find references to “load testing” or “traffic simulation” software and vendors in response to ever greater expectations for performance of so-called “3 tier” web applications. The common thinking then was that by instrumenting each tier and then simulating the growing consumer web traffic *before* you launched a website, you might find performance bottlenecks to fix leading to a better end user outcome — especially if there was a commercial component to the website such as e-commerce, etc. that relied upon performance layers for the web servers, app servers, and database servers.

Fast forward a few years and the IT analyst community identified a growing number of vendors supplying software performance agents, software performance collectors, and performance measurement oriented tools as the “application performance management” market. By 2013, application performance management had become a somewhat crowded[3](#footnote-3) multibillion dollar market that is currently[4](#footnote-4) on track to become better known as the “observability” market.

By 2015, The OpenTracing Project was launched by Uber application performance management engineers with the ambition of proving a vendor neutral instrumentation library for developers interested in application performance management. Similarly, Google application performance management engineers using similar internal tools became the inspiration for a clean room implementation of those tools called OpenCensus.

Maybe next year maybe no go 🎶
-----------------------------

By early 2019[5](#footnote-5), convergence took place as OpenTracing and OpenCensus merged to create OpenTelemetry[6](#footnote-6). So, if you are starting out with an understanding of Otel you can relegate references to OpenTracing as a historical foundational footnote that has been archived by the Cloud Native Computing Foundation[7](#footnote-7) as of early 2022.

Who uses Otel?

Well, first, let’s recall recent posts regarding platform engineering and [telemetry](https://www.google.com/search?q=telemetry+site%3Asunday.fudge.org).

(#footnote-8) across both Plaform Engineers and Site Reliability Engineers. 

Platform Engineers:


> *Builds for Internal developer teams*
> 
> *Uses APM, observability, tracing. Cares a lot about instrumentation and OpenTelemetry.*
> 
> 

Site Reliability Engineers:


> *Builds for customers*
> 
> *Uses metrics, logs, dashboards; monitoring, alerting, and agent/sidecar/blackbox telemetry.*
> 
> 

What it takes to make it show 🎶
-------------------------------

Who else is a great resource of information on Otel?

The following tweets from 2021-2022 are just a sample of the amazing community to consider Following or adding to your Lists.

Liz Fong-Jones (方禮真) @lizthegreyIn case you're curious what getting featured by HN looks like.

Same data side by side in @LightstepHQ and in @honeycombio, from the #OpenTelemetry collector receiving browser instrumentation and teeing it to both sinks (thanks @austinlparker!) ![honeycomb graph showing latency heatmap and number of requests](https://cuthrell.com/favicon.png)![lightstep latency histogram](https://cuthrell.com/favicon.png)![lightstep query builder showing rate of requests received for trailing hours to opentelemetry.io](https://cuthrell.com/favicon.png)](https://twitter.com/lizthegrey/status/1453525797243797510?s=20&t=40rloke9wxFY3fbZZU2ZCQ)[12:55 AM ∙ Oct 28, 2021



15Likes2Retweets](https://twitter.com/lizthegrey/status/1453525797243797510?s=20&t=40rloke9wxFY3fbZZU2ZCQ)Charity Majors @mipsytipsyFor those of you who have been living under a rock, OTel is an open standard for generating, collecting, and exporting telemetry in a vendor agnostic way.

Before OTel, every vendor had its own libraries, and switching (or trying out) new vendors was a \*bitch\*.](https://twitter.com/mipsytipsy/status/1494857554714718209?s=20&t=40rloke9wxFY3fbZZU2ZCQ)[2:13 AM ∙ Feb 19, 2022



97Likes7Retweets](https://twitter.com/mipsytipsy/status/1494857554714718209?s=20&t=40rloke9wxFY3fbZZU2ZCQ)Gordon Radlein @maascampToday was my last day at Meta.

On Monday I'll start my new role as an Eng Director @datadoghq working on APM and figuring out our plans for @opentelemetry.

Excited to try my hand on the product side of the business.](https://twitter.com/maascamp/status/1507473053814439936?s=20&t=40rloke9wxFY3fbZZU2ZCQ)[9:42 PM ∙ Mar 25, 2022



624Likes16Retweets](https://twitter.com/maascamp/status/1507473053814439936?s=20&t=40rloke9wxFY3fbZZU2ZCQ)(https://twitter.com/alolita/status/1486519136528179203?s=20&t=40rloke9wxFY3fbZZU2ZCQ)[1:59 AM ∙ Jan 27, 2022



124Likes6Retweets](https://twitter.com/alolita/status/1486519136528179203?s=20&t=40rloke9wxFY3fbZZU2ZCQ)So, how will Otel factor into the next industrial revolution?

Until next time… Place your bets!

Disclosure
==========

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).

[1](#footnote-anchor-1)Read: <https://web.archive.org/web/20160115075431/http://opentracing.io/>

[2](#footnote-anchor-2)Read: <https://web.archive.org/web/20180105085814/http://opencensus.io/>

[3](#footnote-anchor-3)Read: <https://www.statista.com/statistics/486354/application-performance-management-software-vendor-market-share/>

[4](#footnote-anchor-4)Read: <https://www.idc.com/getdoc.jsp?containerId=US48353021>

[5](#footnote-anchor-5)Read: <https://www.cncf.io/blog/2019/05/21/a-brief-history-of-opentelemetry-so-far/>

[6](#footnote-anchor-6)Read: <https://opentelemetry.io>

[7](#footnote-anchor-7)Read: <https://www.cncf.io/blog/2022/01/31/cncf-archives-the-opentracing-project/>

[8](#footnote-anchor-8)Read: <https://www.honeycomb.io/blog/future-ops-platform-engineering>

