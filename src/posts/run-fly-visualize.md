---
title: "Run Fly Visualize"
description: "Part 2: A look at silo spreadsheet sprawl and advisable Qlik ecosystem alternatives"
date: 2024-07-07
---
This week we continue to take a look at silo spreadsheet sprawl and advisable alternatives from the Qlik ecosystem.

## Getting Informed

Last month, I was fortunate to attend [Qlik Connect 2024](https://www.linkedin.com/pulse/reflecting-qlik-connect-2024-jay-cuthrell-p7gpe/). I also had a few weeks to collect my thoughts and go deeper [last week](/spawl-walk-run/) on the Qlik ecosystem in "[Sprawl, Walk, Run](/spawl-walk-run/)" as Part 1 of 2.

One of my goals with [Fudge Sunday](/) is a ~1000-word limit for each edition. This week I'll go deeper into visualizations as Part 2 of 2.

### Writeback

As a recap, Qlik Partners were presenting in booths and sessions along the edge of the Qlik Connect show floor. Two of the major Qlik product [^products] related themes that I picked up on were the importance of **writeback** and **visualizations** to Qlik Connect attendees.

[^products]: [Qlik Sense](https://www.qlik.com/us/products/qlik-sense) and [Qlik Analytics](https://www.qlik.com/us/products/qlik-data-analytics) were mentioned in multiple conversations and often interchangeably but there were a few discussions on pre-existing [QlikView (no space)](https://www.qlik.com/us/products/qlikview) investments in transition.

Last week, in "[Sprawl, Walk, Run](/spawl-walk-run/)" the topic of [writeback](/topics/writeback) capabilities explored ways to avoid [silo spreadsheet sprawl (SSS)](/topics/sss). Ideally, data platforms provide writeback to enable real-time capabilities of the widest possible number of users for contribution, analysis, and visualization.

### Visualizations

Several Qlik partners at [Qlik Connect](https://www.linkedin.com/pulse/reflecting-qlik-connect-2024-jay-cuthrell-p7gpe/) pitched how they enhanced, simplified, or customized visualizations as part of their offerings. Notably, a session along the edge of the show floor involving [the topic of Qlik native visualizations](https://www.linkedin.com/posts/jaycuthrell_visualizations-analytics-qlikconnect-activity-7204208188487811074-CsH0?utm_source=share&utm_medium=member_desktop) overflowed into the halls. 🤯

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7204208187237937155" height="667" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

How does one interpret such an appetite for visualization content and updates? Carefully.

One conversation that stayed with me was just after one such session. Qlik has an enviable community of passionate practitioners. *(edited for brevity)*

> We got slammed with customization requests in our backlog. Sales was screaming at us. Your [Layout Container](https://www.youtube.com/watch?v=iOyApU8SsJA) update let us ship a solution that made sales super happy now. I wanted to personally thank you for helping us get @#$% done!

*— A Qlik Connect Attendee*

For context, check out [Community: Qlik Introduces a New Era of Visualization](https://community.qlik.com/t5/Product-Innovation/Qlik-Introduces-a-New-Era-of-Visualization/ba-p/2449556) or [Blog: Qlik Introduces a New Era of Visualization](https://www.qlik.com/blog/insight-with-eyesight-qlik-introduces-a-new-era-of-visualizations).

#### What are some Qlik Partner examples?

Within the Qlik community, [insightsoftware acquired Vizlib](https://insightsoftware.com/blog/2023-08-29/) a year ago. Based on the fascinating "[Qlik Connect Rewind from insightsoftware](https://insightsoftware.com/resources/qlik-connect-rewind/)", I believe there will be a shift in the Qlik ecosystem to accelerate highly customized experiences.

Also, I noted several visualization examples that reflected work by Qlik Partner, [Cluster](https://clusterdesign.io/), which highlighted strong UX patterns and practices. My fellow [Tech Field Day Experience at Qlik Connect 2024](https://techfieldday.com/event/qlikconnect24/) delegates also noted the [impressive public sector work](https://clusterdesign.io/public-sector/) with [socially impactful and award-winning visualizations](https://clusterdesign.io/cluster-empowers-national-gender-violence-map-to-win-international-award/).

#### How much coding is required?

Qlik refers to three distinct options as coding approaches to embedded analytics: [PRO-code, LOW-code, and NO-code](https://www.qlik.com/us/data-analytics/embedded-analytics). As for why include PRO... well, it rhymes! 🤓

- Qlik's PRO-code reflects my understanding of how Qlik partners are delivering on the leading edge of what is possible for visualization — or that the end user is a power user and "knows what they are doing" in terms of security and governance requirements.
- Qlik's LOW-code leverages [nebula.js](https://github.com/qlik-oss/nebula.js/) to get faster results in visualization projects that are arguably more aligned with security and governance requirements.
- Qlik's NO-code democratizes access to pre-built visualizations where the end user does not need to be involved in any coding with the benefit of being inherently consistent with security and governance requirements.

#### How does this fit into the Qlik products portfolio?

This week I made a screenshot of Qlik's "All Products" web page because I expect that simplification is coming. I've highlighted the areas in orange that I believe are key.

[![Qlik All Products with orange highlights](/assets/images/screenshots/2024-07-07-10-04-44.png)](https://www.qlik.com/us#)

Over time, I believe Qlik's coding approach for end users will increasingly be headed towards [low-code](/topics/lowcode/) and [no-code](/topics/nocode/) for the majority and that it will primarily be Qlik partners that enable deeper customizations (i.e. PRO). Further, I believe that cloud computing capabilities for pragmatic A.I. will unlock on-demand personas and entitlements governed views that are consistently aligned with intent without the burden of linearly scaled requirements for the human QA/QC component.

#### Where is the market going?

Of course, if this belief in better data platform designs with writeback and actionable visualization as a vision ALSO manifests in market execution, the current location Qlik has earned within the Gartner® Magic Quadrant™ for Analytics and Business Intelligence Platforms will likely be up and to the right next year. Stay tuned.

[![2024 Gartner® Magic Quadrant™ for Analytics and Business Intelligence Platforms](/assets/images/screenshots/2024-07-07-10-52-24.png)](https://www.qlik.com/us/gartner-magic-quadrant-business-intelligence)

Generally speaking, as each company in any Gartner MQ takes a unique approach to demonstrate both vision and execution the end users stand to benefit from this competition. Then again, companies that wish to leapfrog into another quadrant will likely fuel a consolidation through M&A activity in 2-3 years.

#### How will the Qlik Partner ecosystem evolve?

Along with changes in the ecosystem and market, I also believe that Qlik Partners will execute one or more strategies: Embrace, Expand, and Diverge. Here are just a few possibilities off the top of my head:

##### Embrace

- Embrace Qlik's PRO-code to differentiate as a niche partner in specific industry use cases
- Embrace Qlik's LOW-code to differentiate and matriculate to a higher partnership level

##### Expand

- Expand Qlik training services offerings for LOW-code and NO-code onboarding to accelerate the adoption of the latest Qlik features
- Expand Qlik professional services offerings to accelerate transitioning to Qlik cloud-based services

##### Diverge

- Diverge from pure Qlik ecosystem to embrace MQ players Google (Looker), Microsoft (BI), and Salesforce (Tableau)
- Diverge from pure Qlik ecosystem to go deeper into UX design patterns with players like Figma or pure analytics players like SAS (on track to IPO)

#### How does the data platform evolve?

Data platforms are fascinating and I'll be keeping an eye on the [data platforms](/topics/dataplatforms) space as it evolves. Technology might not be predictable but it can be cyclic [^cyclic].

[^cyclic]: When I think of the accelerating amounts of data being created, I find it useful to keep track of years and cherry-pick times that are easier to remember. For example, I was just looking back at prior Fudge Sunday updates and noted [my last day at Dell Technologies](/archive/my-tenth-year-at-dell-technologies) was 4 years ago which was also the 4 years after [the Dell EMC combination](/archive/my-sixth-year-at-vce-and-my-sixth-week-at-dell-emc). ⌛️

Indeed, we're into the teenage years of the [measure anything and everything](https://www.etsy.com/codeascraft/measure-anything-measure-everything) movement. Today, that's a lot of data with real costs to store, retrieve, process, etc... even with the promise of solutions like [OTel](/topics/otel).

Then again, if the cloud bill isn't (yet) getting you meetings with the CFO, please log away. However, if you do not have access to ZIRP (most of us arguably), please enjoy this presentation on asking [what is worth visualization for observability](https://www.youtube.com/watch?v=0Dzk6RSnWfY) vs. what is visualization for the sake of visualization. 🤔

[Monitorama PDX 2024 - The Ticking Timebomb of Observability Expectations](https://www.youtube.com/watch?v=0Dzk6RSnWfY)

https://www.youtube.com/watch?v=0Dzk6RSnWfY

### Jay's Reading, Watching, and Listening List

- 🔖 [Building and scaling Notion’s data lake](https://www.notion.so/blog/building-and-scaling-notions-data-lake)
- 🔖 [Gen AI: too much spend, too little benefit?](https://www.goldmansachs.com/intelligence/pages/gen-ai-too-much-spend-too-little-benefit.html)
- 🔖 [AI’s $600B Question](https://www.sequoiacap.com/article/ais-600b-question/)
- 📺 [What's next for AI agentic workflows ft. Andrew Ng of AI Fund](https://www.youtube.com/watch?v=sal78ACtGTc)
- 🎧 [WASM, Developer Experiences and Kubernetes](https://www.thecloudcast.net/2024/06/wasm-developer-experiences-and.html)

That's all for this week. As a reminder, [Hot Fudge Daily](https://hot.fudge.org) is available as a [$9.99 yearly subscription](https://hot.fudge.org) and [Spicy Edition Sunday for 2024-07-07](https://hot.fudge.org/archive/spicy-edition-sunday-for-2024-07-07/) is the free digest of last week. 🤓

## Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

***

p.s. As I've gotten older, I have come to appreciate getting snail mail. If you have time to [drop me a postcard](https://jaycuthrell.com/contact), I'm going to be scanning the picture side of the postcards I've received and link to a Fudge Sunday Reader Postcards gallery (with suitable redactions and filtering for greater anonymity) as a newsletter trailer of sorts. Stay tuned! [✉️](https://jaycuthrell.com/contact)
