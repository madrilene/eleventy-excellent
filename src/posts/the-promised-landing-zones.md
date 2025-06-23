---
title: "The Promised Landing Zones"
description: 'A look and landing zones at AWS, Azure, GCP, and OCI'
date: 2023-03-20
---
Music: [Bruce Springsteen - The Promised Land (1978)](https://www.youtube.com/watch?v=azQY2YBUMQc)

This week we take a look at the growing adoption of Landing Zones.

# Getting Informed

For this issue of Fudge Sunday, we're going to suggest replacing the word Landing Zones (LZ) with plans or blueprints or recipes. As with plans, blueprints, or recipes there can be lesser or greater details depending on the precise needs for the desired outcome.

Understanding why Landing Zones (LZ) is a term worthy of capitalization is as important as the likelihood of their increased reference as an acronym, LZ, and their use in practice. For example, the proper LZ can make for more consistent outcomes when different teams are deploying different applications in different CSP deployments — each with their own CSP specific LZ.

Fudge Sunday readers will recall that [each CSP promotes a Cloud Adoption Framework (CAF) with references to tools — possibly with a bias towards their own](https://fudge.org/archive/happy-when-it-toolchains/).

## Driving all night chasing some mirage 🎶

First, let's start with a quote attributed to either Admiral Grace Hopper and Professor Andrew Tanenbaum.

> \_"The nice thing about standards is that you have so many to choose from"\_ 

To be clear, there is not just one all encompassing LZ. Arguably, every application could have an ideal LZ with specific considerations for the deployment destination per Cloud Service Provider.

Consider the following LZ options:

- [Azure Landing Zones](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/)
- [AWS Landing Zones](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-aws-environment/understanding-landing-zones.html)
- [GCP Landing Zones](https://cloud.google.com/architecture/landing-zones)
- [OCI Landing Zones](https://docs.oracle.com/en-us/iaas/Content/cloud-adoption-framework/landing-zone.htm)

And so on... the point being that the most commonly referenced elements within LZ discussions and definitions for every CSP combines both technical as well business decisions. In effect, the LZ can be a simple minimum viable list that expands with the requirements of the application and its complexity.

- well-architected with industry-standard best practices considerations for governance
- application and often platform specific security profiles with multi-account isolation methodology
- modular design for scale, management, and lifecycle
- meant to summarize vast number of lessons learned

So, at this point, you might be asking why anyone wouldn't simply adopt LZ as defacto for any application that is being deployed into a CSP. Well, it's like that old saying: 

> \_You can lead a horse to water but you cannot make him adopt [an effective operational and governance model to drive the cloud adoption strategy, determine how teams will collaborate, and ensure security and control as their organization
grows.](https://platformengineering.org/talks-library/landing-zones)\_

## Find somebody itching for something to start 🎶

\*\*Warning:\*\* I like analogies. It might be heresy to suggest that Landing Zones are analogous to pasta sauce — but here I go. 🍝

[![us-pasta-sauce-market-size.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/b6df14dd-2334-47cd-90ec-a8f71e62c7f1.png)](https://www.grandviewresearch.com/industry-analysis/pasta-sauce-market) 

Now, if you consider the CSP market is tracking towards $1T, perhaps a pasta sauce analogy is appropriate.

https://www.youtube.com/watch?v=2J87QekxQVI

So, if you are part of an organization that is embracing all the promises of cloud, there will be those stirring a pot of \_preconfigured good enough for the whole family to enjoy in this lifetime\_ and those standing to the side longing for bespoke hand crafted small batch timelines while conveniently forgetting the hit or miss nature of such approaches en masse under duress filled (missed) timelines.

Again, the point being, you can walk down the sauces aisle at your typical supermarket and there are going to be dozens and dozens of LZ, errr, pasta sauce options. Each sauce will have variations on ingredients but you'll probably find the same spices referenced even if the base varies. 🧄🍅

Are you are looking for a zesty arrabiata for your k8s? Or, are you seeking an alfredo for the ML/AI stack? Or, perhaps you'll require a basic pomodoro for the legacy monolith that was born before the cloud existed?

So, let's visit the LZ list to see if the pasta sauce analogy fits:

> well-architected with industry-standard best practices considerations for governance

- Shelf stable tamper proof small, medium, and large containers in plastic, glass, and metal 🥫🫙
- nutritional information contained printed on the label with supply chain references

> application and often platform specific security profiles with multi-account isolation methodology

- Basic instructions for use 
- Recipe suggestions

> modular design for scale, management, and lifecycle

- Handling / Cooking / Refrigerate after opening
- Expiration dates

> meant to summarize vast number of lessons learned

- Represents the [most balanced palette choices](https://nymag.com/strategist/article/best-jarred-tomato-sauce.html) for the widest possible consumer market
- Anticipates right price point and aisle/shelf placement in a retail setting

Arguably, stirring the sauce, setting timers, and tasting it periodically is a combination of operational best practices, logging, and observability. Yes, we will explore that equally tortured analogy in a future issue of Fudge Sunday.🍝

So, what will be the next big thing to increase and simplify Landing Zone adoption?

Until then… Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).
 
🤓

