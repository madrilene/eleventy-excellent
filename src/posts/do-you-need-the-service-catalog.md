---
title: "Do You Need The Service Catalog?"
description: ''
date: 2023-05-21 23:16:18.709000+00:00
---

 

Music: [Tubeway Army - Do You Need The Service? (1979)](https://www.youtube.com/watch?v=1XjhHxd-6S0)

This week we take a look at service catalog frameworks, the internal developer platform (IDP), and developer experience (DevX).

# Getting Informed

To understand the concept of a service catalog, it is important to consider that, historically, an \_[IT service catalog](https://en.wikipedia.org/wiki/Service\_catalog)\_ is typically associated with a web based portal for end users (knowledge workers) to request common IT services. Essentially, the IT service catalog is meant to enable orderly requests for anything from software (application/licenses) to a device (PC/mobile/etc.) to support (technical/business) to infrastructure (servers, storage, networking, cloud, etc.). 

Today, the evolution of the IT service catalog continues as new technologies like progress indicators, conversational chat bots with ML/AI, and realtime language translation. Further, there are multiple ISV suppliers of solutions that have pivoted to SaaS offerings that originated from [IT buyer persona](https://www.servicenow.com/products/it-service-automation-applications/service-catalog.html) roots, [HR buyer persona](https://www.workday.com/en-us/products/platform-product-extensions/overview.html) roots, and a newer set of players with [software development buyer persona](https://www.atlassian.com/software/compass) roots or similarly [cloud native origins](https://backstage.spotify.com) as donations to the [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io).

Of course, not all end users are the same and there are different needs that might not be as common but that are very important — such as the needs of software application developers as end users. For that reason, the notion of a \_software team specific\_ service catalog is of growing importance as more companies embrace digital transformation and express their businesses through increasingly sophisticated software applications.

As a recap, Fudge Sunday briefly covered the concept of a service catalog in [Build a Cloud Platform Foundation](https://fudge.org/archive/build-a-cloud-platform-foundation/) and [IDP Clearly Now](https://fudge.org/archive/idp-clearly-now/). However, a shorter definition for service catalog is available on [internaldeveloperplatform.org](https://internaldeveloperplatform.org/developer-portals/) that is loosely based on a similar \_developer portal\_ definition from Gartner... but here's my wordier take to bridge developer portal and service catalog and platform engineering:

> A Service Catalog is an exhaustively curated self-service list of developer empowering capabilities that is easily discovered, accessed, and consumed as a foundational part of developer experience such as an internal developer platform or developer portal supported by a platform engineering team.

Over time, interest in improving overall DevX is growing regardless of which phrase we choose to use. However, the key consideration is that developers are the newest audience to satisfy for all aspects of providing better DevX.

Now, if the service catalog is the goal, the next step is to plan and find the right toolchain to help populate and present a service catalog. The toolchain might be a service catalog framework, a service catalog product, or even a third-party managed service catalog SaaS itself.

## Is something on your mind? 🎶

At this point, you might be wondering what a service catalog or a developer portal might look like. That's a natural curiosity and the most important thing to remember is that the \_look and feel\_ will ultimately depend on the needs of the developers meant to be served and how well the curated elements are presented by the platform engineering team.

Luckily, the growing importance of the service catalog and IDP topic has resulted in simultaneously growing bodies of content to satisfy curiosity for what is possible. In addition, internal platform engineering toolchain projects within digitally native organizations are being exported outside as open source projects entering the [sandbox](https://www.cncf.io/sandbox-projects/) with many [incubated to graduated within the CNCF](https://www.cncf.io/projects/).

In fact, there are now multiple service catalog, developer portal, and IDP options that can be considered as a project to adopt or to be consumed as a service (IDPaaS). Here are just a few examples that are publicly accessible showcases.

### Live Demos and YouTube
 
- [Backstage Community](https://backstage.io) offers a [showcase demo](https://demo.backstage.io) with no email required and also has a [YouTube channel](https://www.youtube.com/@spotifyrd4973) in addition to being an [Incubating Project on the CNCF Landscape](https://landscape.cncf.io/card-mode?selected=backstage)
- [Janus Community](https://janus-idp.io) offers a [showcase demo](https://showcase.janus-idp.io) with no email required and also has a [YouTube channel](https://www.youtube.com/@januscommunity)
- [Port](https://www.getport.io/usecases/cloud-resource-catalog) offers a [showcase demo](https://demo.getport.io/self-serve) with no email required and also has a [YouTube channel](https://www.youtube.com/@getport/featured) \_Update 22-May-2023: [Roni Florman](https://www.linkedin.com/in/ronifloman/) shared a [catalog setup video](https://www.youtube.com/watch?v=ro-h7tsp0qI) by [Viktor Farcic](https://www.linkedin.com/in/viktorfarcic/)\_ 🙏

### Registration Required Demos and/or YouTube
- [Mia-Platform](https://mia-platform.eu/solutions/composable-enterprise/) offers a demo but you'll need to share your company email or check out their [YouTube channel](https://www.youtube.com/channel/UCWEgCxRmFgHgCwV3ntZ2hvA)
- [Humanitec](https://humanitec.com/use-cases/build-developer-portals) offers a demo but you'll need to share your company email or check out their [YouTube channel](https://www.youtube.com/@humanitec/videos)
- [Roadie](https://roadie.io/backstage-bites/catalog-ownership/) offers a demo but you'll need to share your company email or check out their [YouTube channel](https://www.youtube.com/@roadie\_io/featured)
- [OpsLevel](https://www.opslevel.com/catalog) offers a demo but you'll need to share your company email or check out their [YouTube channel](https://www.youtube.com/channel/UCqACrwayvmn\_f8VWnAyI4kA)

### Registration Required Demos

- [Cortex](https://www.cortex.io/products/service-catalog) offers a demo but you'll need to share your company email
- [configure8](https://www.configure8.io/catalog) offers a demo but you'll need to share your company email

They key concept each of these options represents is the variety of choices in pursuit of improving DevX. For groups of practitioners and business leaders focused on software development, there exists a spectrum of increasingly opinionated choices from open source projects to service catalog frameworks to IDP to IDPaaS. 

## My silhouette is changing 🎶

During the link gathering for this issue of the newsletter, several YouTube videos described what it takes to get a developer portal stood up, populate the service catalog, get the IDP adopted, and not become a cautionary tale of thinking everything will be a batteries included outcome. It was hard to pick just one but please take time to check out each video for the wide range of lessons learned:

- [Lessons learned](https://www.youtube.com/watch?v=UraajskJjUg) from [Taras Mankovski](https://www.linkedin.com/in/tarasm/)
- [Lessons learned](https://www.youtube.com/watch?v=UraajskJjUg) from [Alan Barr ](https://www.linkedin.com/in/alanmbarr/)
- [Lessons learned](https://www.youtube.com/watch?v=1FCdT0UQDik) from [Dominik Rose](https://www.linkedin.com/in/dominikrose/)
- [Lessons learned](https://www.youtube.com/watch?v=jpzEtab95\_U) from [Austin Lamon](https://www.linkedin.com/in/austinlamon/)

So, what will be the next big thing in service catalog frameworks, IDP, IDPaaS, and DevX?

Until then… Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

[^comment]: TIL that [Substack Notes allows deeplinking](https://open.substack.com/chat/posts/a86307cb-045e-4f06-a066-552f7127fe26)
🤓


