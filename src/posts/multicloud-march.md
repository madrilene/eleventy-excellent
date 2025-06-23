---
title: "Multicloud March"
description: ''
date: 2021-04-10 00:00:00+00:00
---

Time flies. This is a reflection on one of the many things I’ve learned about as of March 2021 since [my first day at Faction](https://fudge.org/archive/cloud-data-services-ahead).

Basically, in this post I wanted to capture some thoughts over the past 90 days (technically 117). While I have more thoughts that are topical, I’ll use this post to reflect on multicloud and the march towards multicloud… in March. Ah, wordplay.

Also, I resisted publishing this on April 1st for all the obvious reasons.

:smile:

:-)

:)

Multicloud Rosetta Stone Required
=================================

Cloud service providers are growing in number. So too are their product marketing teams that each try to make unique or differentiated claims about their portfolio.

My prior decade in converged infrastructure while creating private clouds taught me the value of deterministic power, weight, cooling, and geometry for a ease of datacenter deployment. In essence, for cloud service providers, direct connectivity is the next progression: (aspiration) deterministic latency.

Of course, there are only so many ways to uniquely describe or brand similar things like throughput. Yet, the naming continues to stay, mostly, on… brand.

Saying direct sounds exclusive because it is exclusive. Then again, sometimes there times when direct is not so direct and there are approaches such network-to-network interface (NNI) which can lower costs for an acceptable but nonetheless lowered level of performance.

The NNI discussion is for another time. For now, I’d like to share some findings from March 2021 on what it means to be at the top tier.

Packets Express
===============

I’ve always been fascinated by network connectivity. The higher the throughput the better, right?

Throughput could be thought of as simply the bandwidth (amount) and the latency (time) to fulfill a request. As such, words like express or fast would be likely modifiers in the marketing word soup.

By way of [poultry analogy](https://fudge.org/archive/the-5-ps-of-workloads), if PaaS was poultry as a service there would be the high latency drive through lane and then there would be, well, the express lane.

[![Chicken Express](https://cuthrell.com/favicon.png "Chicken Express")](https://cuthrell.com/favicon.png)Preferred Packet Pricing Pending Prudent Placements
===================================================

Speaking of marketing, the shorter the name the better, right? Well, a lot of ink can be spilled in trying to make poultry sound more interesting and the same applies to the delivery of packets over a network.

As an exercise, one can even arrange the various names for the top tiers of cloud service provider connectivity from shortest name to longest. So, even a simple ordering would look like this for private dedicated (more) deterministic or even extremely low latency high bandwidth connectivity options (with links to documentation):

* [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)
* [IBM Cloud Direct Link](https://cloud.ibm.com/docs/dl)
* [Alibaba Cloud Express Connect](https://www.alibabacloud.com/help/product/27782.htm)
* [Microsoft Azure ExpressRoute Direct](https://docs.microsoft.com/en-in/azure/expressroute/)
* [Oracle Cloud Infrastructure FastConnect](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/fastconnect.htm)
* [Google Cloud Platform Dedicated Interconnect](https://cloud.google.com/network-connectivity/docs/interconnect)

Naming is hard but that’s a tie for four (4) references to “cloud” and “connect” and a tie for two (2) references to both “express” and “direct”. Now, let’s boil them down a bit through another lens: pricing.

* [AWS Direct Connect Pricing](https://aws.amazon.com/directconnect/pricing/)
* [Pricing for IBM Cloud Direct Link](https://cloud.ibm.com/docs/dl?topic=dl-pricing-for-ibm-cloud-dl)
* [Billing of dedicated connections over Express Connect circuits (Alibaba)](https://www.alibabacloud.com/help/doc-detail/54582.htm)
* [Azure ExpressRoute pricing](https://azure.microsoft.com/en-us/pricing/details/expressroute/)
* [FastConnect Pricing (Oracle Cloud)](https://www.oracle.com/cloud/networking/fastconnect-pricing.html)
* [Pricing (Google Cloud Platform Dedicated Interconnect)](https://cloud.google.com/network-connectivity/docs/interconnect/pricing)

In essence, these options are all marketed as the lowest latency, shortest path, and most highly performing connection to their service delivery location. However, the differences between them are many if you quickly review the documentation and the pricing.

Things will obviously change but just looking at March 2021 is interesting. Just to pick out a quick example from above.

* You’ll see pricing for throughput port charges typically from 1 Gbps to 10 Gbps for most. Yet for others, up to 100 Gbps.
* Not to isolate AWS, but [AWS has only been offering 100 Gbps for a little over a month as of this blog post and only in select locations](https://aws.amazon.com/about-aws/whats-new/2021/02/aws-direct-connect-announces-native-100-gbps-connections-select-locations/). That’s right, the most dominant first mover in cloud — was not [the first to offer 100 Gbps](https://azure.microsoft.com/en-us/updates/expressroute-direct-is-now-available/).
* Note: First to 100 Gbps was Azure almost two years ago and soon second by Google Cloud Platform later in 2019. AWS was third in 2021, but again, it’s still a fast follow by a market leader.

But let’s get back the documentation and pricing.

* You’ll see partner references.
* You’ll see caveats on locations.
* You’ll see patterns in overlays of the caveats on locations.
* You’ll see 10GBASE-LR (1310 nm), 100GBASE-LR4, and single mode long reach WDM fiber optics specifications.
* You’ll see varied LAG, LACP, EBGP-4, 802.1Q, varied MTUs, and more.
* You’ll see unmetered or metered tiers.
* You’ll see additional pricing for global routing at the top tiers.
* You’ll see different language on egress fees or waived egress fees or fees referred to euphemistically as a “data charges” (by the way, that’s YOUR data).
* For some options you’ll see feature performance levels as well as options to consider that drop features in favor of increased performance.
* Metering sophistication and [partnerships with metering in mind are interesting things to keep in mind](https://blogs.vmware.com/virtualblocks/2019/12/03/reduced-pricing-stretched-clusters-vmware-cloud-aws/)

Okay then. What is consistent?

* Each cloud service provider will offer some form of bring your own IP range.
* Of course, this assumes you’ll only ever use that one cloud service provider with that IP range — which is convenient if you are that cloud service provider and everything looks to be exclusively yours.
* Each cloud service provider is pushing towards higher performance which commands a price that only reflects what the market will bear.

Again, letting you switch easily between cloud service providers is not a DIY interoperability nirvana moment. Solving for how to bring your own IP range uniformly and identically across any cloud service provider is an important and essential consideration.

Final Thoughts
==============

Cloud service provider networking differences make it challenging for a uniformly multicloud experience in terms of features and price for performance. Oh, and that pesky assumption that your IP range is exclusive to only one cloud service provider.

Feature uniformity will happen when top tiers of networking feature partity is distributed evenly in the marketplace. That will take time.

Oh, and I’m biased but…

Life is short. You should be able to use your IP range with all of the cloud service providers right now.

How? [Just use Faction](https://www.factioninc.com/solutions/multi-cloud-data-services/).

But don’t take my word for it. [Read these ten (10) patents](https://www.factioninc.com/company/patents/).

Or, just watch a 2 minute movie… :smile:

Oh, I still maintain that my predictions in [Social Telecom 2030](https://fudge.org/archive/social-telecom-2030) will eventually become true:

* *There will be a precipitous drop in memory costs and the future of egregious egress fees for cloud hosting providers is going to shift from awkward to completely unjustifiable.*
* *Cloud egress fees are the 2020s version of long distance charges from the 1990s.*

source: [Social Telecom 2030](https://fudge.org/archive/social-telecom-2030)

Final final thoughts
====================

While I’ve been enjoying Netlify for hosting my blog, I am considering yet another migration to a free tier with one of the cloud service providers. This itch to migrate is a regular occurrence for me and not a reflection on Netlify but my reluctance to wait for


```
$ gatsby build
```
Blogging these days will still be minimal or minor as I continue to put my efforts into documentations at the workplace. Perhaps I’ll be able to change that in 2021 but blogging still is still a minor focus for my time.

