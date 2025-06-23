---
title: Nuance, Repatriation, and iPaaS
description: A look at the speech to text, edge core cloud directions, and open source iPaaS
date: 2023-10-15
---

This week we take a look at speech to text, edge core cloud directions, and open source iPaaS.

The format this week is slightly different because I managed to injure myself in such a way that typing is not joyful. Much of what you're reading here is speech to text — courtesy of Apple.

In the year 2023, the wonders of Apple silicon and macOS allow almost anyone to leverage accessibility features for speech to text.

Apple refers to this accessibility feature as Dictate or Dictation. 

[![When you turn on Dictation on your Mac, you can dictate text anywhere you can type it.](https://help.apple.com/assets/642601949698396B0B0C2097/6426019B9698396B0B0C20AF/en_US/989d87390ce4d2bec97dc3468b95748e.png)](https://support.apple.com/guide/mac-help/use-dictation-mh40584/mac)
Source: [Dictate messages and documents on Mac](https://support.apple.com/guide/mac-help/use-dictation-mh40584/mac)

In somewhat related news history, just over a decade ago, [Apple Siri voice recognition technology was partly confirmed to be underpinned by Nuance in some fashion](https://appleinsider.com/articles/13/05/30/nuance-confirms-its-technology-is-behind-apples-siri).

So, let's take a look at speech to text origins.

# Enter the DRAGON

Dr James Baker published a paper in 1975 entitled "The DRAGON system -- An overview". What followed was (is?) [quite the journey](https://en.wikipedia.org/wiki/Dragon_NaturallySpeaking) in terms of technology, commercialization, mergers, and acquisitions.


[![This paper briefly describes the major features of the DRAGON speech understanding system. DRAGON makes systematic use of a general abstract model to represent each of the knowledge sources necessary for automatic recognition of continuous speech. The model--that of a probabilistic function of a Markov process--is very flexible and leads to features which allow DRAGON to function despite high error rates from individual knowledge sources. Repeated use of a simple abstract model produces a system which is simple in structure, but powerful in capabilities.](https://ieeexplore.ieee.org/assets/img/ieee_logo_smedia_200X200.png)](https://ieeexplore.ieee.org/document/1162650)
Source: [The DRAGON system (1975)](https://ieeexplore.ieee.org/document/1162650)



# Dragon Systems

Over the next two decades, Dragon Systems commercialized what became part of a growing market for consumer grade speech recognition.

Dragon Systems business grade software prices back then were ~$700 USD ($1500 USD today) but consumer grade versions reached just under $300 USD ($600 USD today) when bundled with other software subsidies and partnerships.

[![DRAGON NATURALLY SPEAKING 3 PREFERRED + NATURALLYMOBILE PC CD VOICE on eBay!](https://i.ebayimg.com/images/g/plkAAOSwVwNg14un/s-l500.jpg)](https://www.ebay.com/itm/304046992442)
Source: [DRAGON NATURALLY SPEAKING 3 PREFERRED + NATURALLYMOBILE PC CD VOICE](https://www.ebay.com/itm/304046992442)

[![A less-expensive version of speech recognition software from Dragon Systems is on the way to retail shelves.](https://www.cnet.com/a/neutron/images/logos/cnet.png)](https://www.cnet.com/tech/tech-industry/speech-recognition-gets-cheaper/)
Source:[Speech recognition gets cheaper](https://www.cnet.com/tech/tech-industry/speech-recognition-gets-cheaper/)


Meanwhile, around this same time, [Voice Extensible Markup Language (VXML)](https://en.wikipedia.org/wiki/VoiceXML) Forum and the [VoiceXML](https://en.wikipedia.org/wiki/VoiceXML) standard would emerge.

# Subtle Nuance

By 2000, Dragon Systems had been acquired by ScanSoft (formerly Visioneer). ScanSoft combined with Nuance in 2005 to become Nuance.

NaturallySpeaking was rapidly expanding beyond prosumer markets to be general consumer software on CDROMs — often paired with a microphone headset.

By 2005, Nuance Dragon NaturallySpeaking shipped versions retailing for ~$200 USD ($300 USD today).

From 2009 to 2021, Nuance would go on to [acquire (and eventually divest) many other companies](https://www.techmeme.com/search/d3results.jsp?q=nuance+buy&wm=false&start=0) too.

# Along comes Microsoft

By early 2022, Microsoft completed the acquisition of Nuance.


[![Strategic, highly complementary acquisition accelerates industry-specific cloud strategy to transform the future of work and care REDMOND, Wash. — March 4, 2022 — Microsoft Corp (Nasdaq: MSFT) on Friday announced the completion of its acquisition of Nuance Communications Inc. (Nasdaq: NUAN), a leader in conversational AI and ambient intelligence across industries including healthcare, financial services](https://news.microsoft.com/wp-content/uploads/prod/2022/03/msft-nuance-social-tile-0-0-1-1-1024x535.jpg)](https://news.microsoft.com/2022/03/04/microsoft-completes-acquisition-of-nuance-ushering-in-new-era-of-outcomes-based-ai/)
Source: [Microsoft completes acquisition of Nuance, ushering in new era of outcomes](https://news.microsoft.com/2022/03/04/microsoft-completes-acquisition-of-nuance-ushering-in-new-era-of-outcomes-based-ai/)


Last month, multiple updates to Nuance and Microsoft Azure features were published:

- [Integrate and enable Nuance IVR in Customer Service as a third-party integration](https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave1/service/dynamics365-customer-service/integrate-nuance-ivr-customer-service)
- [Introduction to integration of Nuance Gatekeeper (preview)](https://learn.microsoft.com/en-us/dynamics365/customer-service/nuance-gatekeeper-introduction)
- [Integration of Nuance Cloud IVR bot with Customer Service](https://learn.microsoft.com/en-us/dynamics365/customer-service/oc-nuance-overview)

# Edge to Core to Cloud in 2023

Next, let's pivot over to placement of workloads that will increasingly integrate other solutions like voice applications. 

In terms of workload placement in non-hyperscale cloud service providers, there are growing numbers of options closer to a data center or data closet near you too.

- [How Dell Claims Apex Smooths out 'Ground to Cloud with Azure HCI](https://thenewstack.io/how-dell-claims-apex-smooths-out-ground-to-cloud-azure-hci-connections/)
- [HPE GreenLake for VMware Cloud Foundation delivers cloud’s operational efficiency on-premises](https://siliconangle.com/2023/09/25/hpe-greenlake-for-vmware-cloud-foundation-delivers-clouds-operational-efficiency-on-prem-vmwareexplore/)
- [Migrating Workloads from Cisco HyperFlex to Cisco Compute Hyperconverged Solution with Nutanix White Paper](https://www.cisco.com/c/en/us/products/collateral/hyperconverged-infrastructure/compute-hyperconverged-migration-wp.html)
- [Google Anthos Ready platform partners](https://cloud.google.com/anthos/docs/resources/partner-platforms)
- [AWS EKS Anywhere](https://anywhere.eks.amazonaws.com/docs/getting-started/)

# Fun Project of the Weekend

Finally, if integrated sounds good, then integration platform as a service (iPaaS) may sound even better. This weekend I decided to connect Slack to Mastodon using [Activepieces](https://github.com/activepieces) which is an open source iPaaS project aiming to provide features and functionality similar to Zapier, Tray, MuleSoft, and Boomi.


<iframe src="https://cuthrell.com/@jay/111240801254644267/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://cuthrell.com/embed.js" async="async"></script>

Fun!

So, what will be the next big thing in speech to text, edge core cloud directions, and open source iPaaS?

Until then… Place your bets!

# Personal Plugs

🤔 If you were wondering how to spend 30 minutes ⏳ of your day next week on Tue, Oct 24, 2023 at 12:30 PM EDT — good news! 🎉 I will be joining [Randy Arseneau](https://www.linkedin.com/in/randyarseneau/) to discuss ["The X(II) Factor: Modernizing Your Apps and Your Infrastructure"](https://ibm.webcasts.com/starthere.jsp?ei=1633985&tp_key=5415c284e9) — 🤓👉 [Register here!](https://ibm.webcasts.com/starthere.jsp?ei=1633985&tp_key=5415c284e9) 👈🤓

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).