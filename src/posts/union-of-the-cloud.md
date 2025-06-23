---
title: "Union of the Cloud"
description: 'Another look at multicloud'
date: 2022-08-07 23:51:09.837000+00:00
---

*[Duran Duran - Union Of The Snake (1983)](https://www.youtube.com/watch?v=n6p5Q6_JBes)*

Getting Informed
================

This week we take another look at multicloud (or multi-cloud if you prefer) but this time across three dimensions: Paths, Patterns, and Problems. So, as you might expect, there will be links to the past and present with a positive outlook on the future.

Thanks for reading Fudge Sunday! Subscribe to receive new posts and support my work.

There's a fine line drawing 🎶
-----------------------------

First, let’s look at ***Paths*** to multicloud by looking back a few years. To get perspective, we’ll examine emphasis on multicloud reasoning and surveys.

For 2019, let’s look at the collective knowledge of… popular multicloud related tweets – but pay keen attention to the first one… (we’ll come back to it later)

[![Twitter avatar for @li_haoyi](https://cuthrell.com/favicon.png)Li Haoyi @li\_haoyiMy company Databricks is looking for software engineers in SF and Amsterdam, interested in:

- Backend services
- Multi-cloud deployments
- Web UI
- Dev Tools
- Data infra

Tons of #Scala, lots of deep tech, and challenging problems.

If anyone wants to work with me, send a message!](https://twitter.com/li_haoyi/status/1106366239624970240?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[1:27 AM ∙ Mar 15, 2019



129Likes53Retweets](https://twitter.com/li_haoyi/status/1106366239624970240?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[![Twitter avatar for @pracucci](https://cuthrell.com/favicon.png)Marco Pracucci 🇮🇹🇪🇺 @pracucciMulti-cloud is the problem very very few customers have but everyone wanna solve, just because it's cool to overcomplicate things.](https://twitter.com/pracucci/status/1116694575748395008?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[1:28 PM ∙ Apr 12, 2019



159Likes54Retweets](https://twitter.com/pracucci/status/1116694575748395008?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[![Twitter avatar for @littleidea](https://cuthrell.com/favicon.png)Andrew Clay Shafer 雷启理 @littleideabefore you go all multi-cloud at least learn about regions, zones, and math](https://twitter.com/littleidea/status/1135366854623485952?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[2:05 AM ∙ Jun 3, 2019



202Likes38Retweets](https://twitter.com/littleidea/status/1135366854623485952?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[![Twitter avatar for @wendynather](https://cuthrell.com/favicon.png)Wendy Nather @wendynather“Let’s go multi-cloud to avoid vendor lock-in.”

“Great, now we’re locked in to MULTIPLE vendors.”](https://twitter.com/wendynather/status/1187467332488179712?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[8:34 PM ∙ Oct 24, 2019



794Likes163Retweets](https://twitter.com/wendynather/status/1187467332488179712?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)For 2020, let’s again look at the collective knowledge of… popular tweets that begin to illustrate the divide of data management and operational justifications.

[![Twitter avatar for @jrdntgn](https://cuthrell.com/favicon.png)Jordan Tigani @jrdntgnBigQuery goes multi-cloud. From the early days of BQ, we said "move the compute to the data, not the data to the compute". Now you can move your compute to data that lives on other clouds (AWS now, Azure soon), just like it was another region. ![Twitter avatar for @GoogleCloudTech](https://cuthrell.com/favicon.png)Google Cloud Tech @GoogleCloudTechWe’re introducing BigQuery Omni, a multicloud analytics solution powered by Anthos. #BigQueryOmni helps you access & analyze data across @googlecloud and other third-party public clouds, all without leaving the familiar BigQuery UI → https://t.co/m5LxOBYLif #GoogleCloudNext https://t.co/L5MFZOGsVc](https://twitter.com/jrdntgn/status/1283039292206518275?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[2:02 PM ∙ Jul 14, 2020



351Likes112Retweets](https://twitter.com/jrdntgn/status/1283039292206518275?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[![Twitter avatar for @CTOAdvisor](https://cuthrell.com/favicon.png)Keith Townsend @CTOAdvisorMy whole practice is based on this quote from @QuinnyPig. #MultiCloud #Cloud #CIO #CTO #TheCube cc @stu](https://twitter.com/CTOAdvisor/status/1294394383303954433?s=20&t=zOpPvIrDPa_EdZRPaK2tbw) [10:04 PM ∙ Aug 14, 2020



138Likes20Retweets](https://twitter.com/CTOAdvisor/status/1294394383303954433?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)For 2021, Hashipcorp[1](#footnote-1) shared the following “5 Numbers To Remember” and went on to specifically call out 66% of companies had deemed it strategically advantageous to operate a Cloud Centers of Excellence (CCoE).

[![](https://cuthrell.com/favicon.png)](https://cuthrell.com/favicon.png)2021 had an emo kid background…
> *The prevalence of Cloud Centers of Excellence (CCoE) is also growing, especially among organizations with larger cloud budgets. Almost ⅔ of companies with annual cloud budgets of $5 million or more operated a CCoE, compared to just 40% of all respondents.*
> 
> 

For 2022, Hashicorp and Forrester Consulting[2](#footnote-2) shared “5 Numbers to Remember” that have a slightly different mix but once again called out Cloud Centers of Excellence (CCoE) and refines the term further to be simply “platform teams”. Also, these “platform teams” are very important – 86% reliance level important!

[![](https://cuthrell.com/favicon.png)](https://cuthrell.com/favicon.png)2022 has a more cheerful uplifting trance like background…
> *Cloud strategy and operations are so important that the vast majority of organizations have created a centralized organizational group or function such as a cloud platform team or Cloud Center of Excellence (CCoE) to make the most of their efforts. (Note: In this study, we refer to these centralized cloud functions as “platform teams.”)*
> 
> 

In summary, the paths are evident in the proliferation of “platform teams”. As such, these specialize cloud perfect teams[3](#footnote-3) are those that developed specific practice disciplines and understanding of domain specific languages as well as the essential tools that help accomplish shared goals to achieve a business outcome.

Through the borderline 🎶
------------------------

Next, let’s think about ***Patterns***. What did we see in 2019 that comes to mind in a different context in 2022?

Well, remember that first tweet from 2019 about Databricks hiring for multicloud deployments? Let’s check in with Databricks again… 

[![Twitter avatar for @protocol](https://cuthrell.com/favicon.png)Protocol @protocolIt’s a good time to be in the data-management business, which Databricks' proved Friday when it announced it has surpassed $1 billion in annualized revenue. [![](https://cuthrell.com/favicon.png)protocol.comFollow the dataToday: what a revenue milestone for Databricks says about the future of enterprise data, Alibaba reports slow but recovering growth in its cloud division, and chip sales data points toward a quiet second half of the year for consumer electronics companies.](https://www.protocol.com/newsletters/protocol-enterprise/databricks-one-billion-alibaba-cloud)](https://twitter.com/protocol/status/1555901630490476544?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)[1:00 PM ∙ Aug 6, 2022](https://twitter.com/protocol/status/1555901630490476544?s=20&t=zOpPvIrDPa_EdZRPaK2tbw)Good times eh? 🤓☁️☁️☁️🤯

At this point, we can safely assume that a multicloud pattern can be based on the selection of a compelling data management service just as much as it can be about thinking carefully about what a multicloud strategy will render — especially when living a cloud in public corporate life.

[![](https://cuthrell.com/favicon.png)Fudge SundayFudge Sunday - Cloud in Public: Impact MappingView online This week we continue to take a look at public things for a public cloud. ☁️✅⚠️🛑 This issue is part 5 of a 5 part series Fudge Sunday - Cloud in Public: Status Dashboards Fudge Sunday - Cloud in Public: Engineering SLO Fudge Sunday - Cloud in Public: DevCommsOps…Read morea year ago · Jay Cuthrell](https://sunday.fudge.org/p/fudge-sunday-cloud-in-public-impact-mapping-826383?utm_source=substack&utm_campaign=post_embed&utm_medium=web)To the borderline 🎶
-------------------

So, what are ***Problems*** for multicloud closing in on that last 10% that say multicloud isn’t working for them? 

According to Hashicorp and Forrester Consulting, well, it’s not the technology – it’s actually the people. Or, it’s the lack of the people to be more specific.

Indeed, the “cloud platform teams” and the “Cloud Centers of Excellence (CCoE)” teams do not grow on trees. Or do they?

If there was a tree analogy, is there an orchard? Can you wait to grow trees?

If there is an orchard, do you have to pick by hand? Can you pick fast enough?

If you don’t have to pick, do you have to squeeze to get juice? Is it worth it?

Or, as I’m often saying to folks that seek comparisons in the world of multicloud services, build vs buy, variable costs modeling, and the separation of truly differentiating cultural investments from enduring intellectual property creation:


> *It’s one thing to compare apples to oranges.* 
> 
> *It’s entirely another to compare apples to an Orange Julius.[4](#footnote-4)*
> 
> 

And if we’re talking about Orange Julius because we just want outcomes…

What are the true business outcomes to prioritize when placing your order?

Until next time… Place your bets… (and place your orders…)

[![](https://cuthrell.com/favicon.png)](https://cuthrell.com/favicon.png)Disclosure
==========

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).

[1](#footnote-anchor-1)Read: [HashiCorp 2021 State of Cloud Strategy Survey (via archive.org)](https://web.archive.org/web/20210811160340/https://www.hashicorp.com/state-of-the-cloud)

[2](#footnote-anchor-2)Read: [HashiCorp 2022 State of Cloud Strategy Survey](https://www.hashicorp.com/state-of-the-cloud)

[3](#footnote-anchor-3)Read: [The Perfect Team](https://fudge.org/archive/the-perfect-team/)

[4](#footnote-anchor-4)Read: [Orange Julius (via wikipedia.org)](https://en.wikipedia.org/wiki/Orange_Julius)

