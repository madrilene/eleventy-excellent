---
title: "GitOps Goes the World"
description: ''
date: 2023-06-05 02:00:19.651000+00:00
---

 

Music: [Gossip - Pop Goes the World (2009)](https://www.youtube.com/watch?v=IFLWfj\_r7kY)

This week we take a look at GitOps and Policy-as-Code (PaC).

# Getting Informed

Fudge Sunday readers might recall the pipeline topic and the shifting left stories previously covered.

https://fudge.org/archive/underneath-the-cncf-tech-radar/

https://fudge.org/archive/fudge-sunday-once-in-a-pipeline/

Clearly there are many [Cloud Native Computing Foundation (CNCF)](https://cncf.io) projects. Projects are often the result of seeking answers to questions. But there are still questions to be answered...

- What if everything in the software lifecycle from developer to operations drew from one true source? 
- What if everything in software versioning currency extended automation from the source to the service?

Such questions provoked neologisms from version control systems favored by software developers (Git) and IT practitioners presiding over services that express a particular version of software produced by developers (Ops). Or, for short, you could argue the answer to these (and other) questions is increasingly referred to as \_GitOps\_.

- What if there was a way to ensure security in our software supply chain?
- What if there was a way to anticipate multiple tenants, multiple feature flags, and compliance?
- What if there was a way to draw from Infrastructure as Code (IaC) concepts and apply those to policies associated with use of IaC?

Such questions were provoked companies bringing software into existence using IaC — continuously delivered — securely. Or, for short, you could argue the need for easily maintained and applied policies in the form of code aka \_Policy-as-Code\_ (PaC).

## Find yourself in a situation 🎶

[OpenGitOps](https://opengitops.dev) is a sandbox project at CNCF as of early 2021. So, if you've ever heard GitOps and wondered what the best definition is, OpenGitOps is defining GitOps in a way that is vendor-neutral.

Until OpenGitOps has \_the\_ definition, there are some history blog posts in the wild written and some by, well, vendors. And, [The History of GitOps](https://www.weave.works/blog/the-history-of-gitops) from [Weaveworks](https://www.weave.works) is a great place to start:

https://www.weave.works/blog/the-history-of-gitops

And now, on to the next CNCF project...

## Make noise from our frustration 🎶

[Kyverno](https://www.cncf.io/projects/kyverno/) is an incubating project accepted to the CNCF in late 2020 with the goal of providing a policy engine for Kubernetes (k8s) governance at scale. And speaking of policies, there are already [283 policies](https://kyverno.io/policies/) available to the community as of May 2023.

For a deeper dive:

- Watch: [Cloud Native Live: What’s new in Kyverno!](https://www.cncf.io/online-programs/cloud-native-live-whats-new-in-kyverno/) with [Whitney Lee](https://www.linkedin.com/in/whitneylee/) of [VMware](https://tanzu.vmware.com/developer/tv/enlightning/47/), [Jim Bugwadia](https://www.linkedin.com/in/jimbugwadia/) of [Nirmata](https://nirmata.com/kyverno-enterprise/), and [Chip Zoller](https://www.linkedin.com/in/chipzoller/) at [Nirmata](https://nirmata.com/kyverno-oss/) 
- Read: [Enforcing Kubernetes Best Practices using Kyverno and Argo CD](https://akuity.io/blog/argo-cd-kyverno-best-practice-policies/) from [Nicholas Morey](https://www.linkedin.com/in/nicholas-morey/) at [Akuity](https://akuity.io)

Also, keep in mind, [CNCF End User Technology Radar for DevSecOps is almost two years old](https://radar.cncf.io/2021-09-devsecops). Time flies!

So, what will be the next big thing in GitOps and PaC?

Until then… Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

🤓
