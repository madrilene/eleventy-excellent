---
title: "Fuzz Jam June"
description: ''
date: 2023-07-02 23:33:07.473396+00:00
---

 

Music: [The Lazy Eyes - Fuzz Jam (2022)](https://www.youtube.com/watch?v=GFyNk8w1opw)

https://open.spotify.com/track/3Pk8ZaUsbzUt4UaCuBh9Mc?si=f64a44fe4c9a472f

This week we take a look at the growing importance of fuzzing[^fuzzing] in platform engineering.

# Getting Informed

Feedback from last week (thank you!) was positive on the format change to "What is Jay reading 📖". This week, I'll once again expand reading 📖 and watching 📺. (no listening 🎧 this week)

📖 - These blog posts are great bite sized entry points for why fuzzing matters.

- First, [📖 Dapr recently completed a fuzzing audit](https://www.cncf.io/blog/2023/06/30/dapr-completes-fuzzing-audit/) for the [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io).
- Second, the team at [Code Intelligence](https://www.code-intelligence.com/) makes the case for [📖 CI/CD Integrated Fuzzing](https://www.code-intelligence.com/blog/cicd-integrated-fuzzing-automotive-software-security).

📺 - After the blog posts, these longer form videos are outstanding for getting into the details of fuzzing as well as the different perspectives and implications of an ever more cloud connected world forming the Internet of Stuff.

- First, The Open Web Application Security Project ([OWASP](https://owasp.org)) hosts [Nancy Gariché](https://www.linkedin.com/in/nancygariche), [Nikki Becher](https://www.linkedin.com/in/nicolebecher/), and [Aimee Reyes](https://www.linkedin.com/in/reyesai/) welcomes [Allison Marie Naaktegeboren](https://www.linkedin.com/in/anaaktge/), to share a [📺 discussion of fuzzing in depth](https://www.youtube.com/watch?v=-RGuAG0ZaZE) and tasty memes! 🤓
- Second, [Jochen Hilgers](https://www.linkedin.com/in/jochen-hilgers/) goes into [📺 the history of fuzzing, present day modern fuzzing, and the future of fuzzing](https://media.ccc.de/v/froscon2022-2772-introduction\_to\_modern\_fuzzing) with live fuzzer use kata.

## I want it all to stay the same 🎶

So, does fuzzing come with an existing scanning toolchain? Does it matter that fuzzing be part of what code is being shipped?

Well, yes, yes it does. Are you getting the feeling we've talked about this before?

You're not wrong.

https://fudge.org/archive/fudge-sunday-needle-in-a-fullstack

But, there's is also the notion of fuzzing the toolchain \*itself\*.

## Don't be afraid to say my name 🎶

Just consider the CNCF references to fuzzing and fuzz testing from 2018 to present:

- [GSoC 2018: Extending Envoy’s fuzzing coverage](https://www.cncf.io/blog/2018/09/28/gsoc-2018-extending-envoys-fuzzing-coverage/) (2018)
- [Securing Open Source: Fuzzing integration, vulnerability analysis and bug fixing of Fluent Bit](https://www.cncf.io/blog/2020/12/15/securing-open-source-fuzzing-integration-vulnerability-a..) (2020)
- [Introducing fuzz testing for Linkerd](https://www.cncf.io/blog/2021/05/11/introducing-fuzz-testing-for-linkerd/) (2021)
- [Argo Security Automation with OSS-Fuzz](https://www.cncf.io/blog/2022/02/28/argo-security-automation-with-oss-fuzz/) (2022)
- [Flux Security: More confidence through Fuzzing](https://www.cncf.io/blog/2022/03/11/flux-security-more-confidence-through-fuzzing/) (2022)
- [etcd integrates continuous fuzzing](https://www.cncf.io/blog/2022/04/13/etcd-integrates-continuous-fuzzing/) (2022)
- [Improving Security by Fuzzing the CNCF landscape](https://www.cncf.io/blog/2022/06/28/improving-security-by-fuzzing-the-cncf-landscape/) (2022)
- [Kubernetes Cluster API integrates continuous fuzzing](https://www.cncf.io/blog/2022/07/20/kubernetes-cluster-api-integrates-continuous-fuzzing/) (2022)
- [containerd completes fuzzing audit](https://www.cncf.io/blog/2023/03/02/containerd-completes-fuzzing-audit/)(2023)
- [The Notary project completes fuzzing security audit](https://www.cncf.io/blog/2023/03/21/the-notary-project-completes-fuzzing-security-audit/)(2023)
- [Crossplane completes fuzzing security audit](https://www.cncf.io/blog/2023/03/24/crossplane-completes-fuzzing-security-audit/) (2023)
- [Helm completes fuzzing security audit](https://www.cncf.io/blog/2023/03/31/helm-completes-fuzzing-security-audit/) (2023)
- [CNCF fuzzing open source projects for security and reliability](https://www.cncf.io/blog/2023/04/18/cncf-fuzzing-open-source-projects-for-security-and-relia...) (2023)
- [Dapr completes fuzzing audit](https://www.cncf.io/blog/2023/06/30/dapr-completes-fuzzing-audit/)(2023 -- as seen above! 🤓)

With my last 20 of 500 words, I'll simply suggest that learning about [Artificial Intelligence Fuzzing (AIF)](https://blackkite.com/blog/rsac-2023-in-review/) is worthwhile.

So, what will be the next big thing for fuzzing in platform platform engineering?

Until then… Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

[^fuzzing]: [The OWASP® Foundation definition of fuzzing](https://owasp.org/www-community/Fuzzing) 
🤓