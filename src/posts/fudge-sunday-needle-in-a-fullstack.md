---
title: "Fudge Sunday - Needle in a Fullstack"
description: ''
date: 2022-03-27 20:29:31+00:00
---

This week we take a closer look at DevSec, SCA, xAST, RASP, DevSecOps, FinOps, and code search.

The Velvelettes "Needle in a Haystack" (1965)

 **Getting Informed**

First, let’s expand some [DevSec](https://disruptops.com/devsecops-vs-devsecops/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) acronyms and give some examples. As a starter, you’ll want to recall the concept of a [“software bill of materials”](https://www.cisa.gov/sbom?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) ([SBOM](https://www.cisa.gov/sbom?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)) from [Fudge Sunday #55](https://sunday.fudge.org/issues/fudge-sunday-everything-counts-in-ops-amounts-1073115?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

Software Composition Analysis (SCA) is a method for looking at all the code that wasn’t written (by you or your team) but was inherited from somewhere else externally along the development journey and now represents a dependency. Or, to understand why SCA is important, please consider [Dependency](https://xkcd.com/2347/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) aka [xkcd 2347](https://xkcd.com/2347/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

There's always a xkcd for everything

 **🎶 I'm tellin' you the natural facts 🎶**

Application Security Testing (xAST) is a generalized approach for static (SAST), dynamic (DAST), or interactive (IAST) scanning methods when testing for vulnerabilities. Now, if this sounds like a [shift-left disruption ready market](https://www.ibm.com/blogs/services/2022/03/13/devops-to-devsecops-a-worthwhile-investment/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), keep reading.

Run-time Application Security Protection (RASP) can be a specific wrapper approach that assumes a specific known context for the internal design of specific software. The RASP approach also enabled the creation of the Web Application and API Protection (WAAP) market because everything that *could* become an API *will* become an API on a long enough timeline.

Examples of companies from A to Z in this space include *(with deep links to an educational blog post)* [AppDome](https://www.appdome.com/blog/avoid-the-hidden-costs-of-building-secure-mobile-apps/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Checkmarx](https://checkmarx.com/blog/the-open-source-supply-chain-under-assault-new-defenses-are-required/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Contrast](https://www.contrastsecurity.com/security-influencers/why-the-difference-between-sast-dast-and-iast-matters?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Data Theorem](https://www.datatheorem.com/blog/securing-the-ci-cd-pipeline-in-pre-production?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Imperva](https://www.imperva.com/blog/api-gateway-or-not-you-need-api-security/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Invicti](https://www.invicti.com/blog/web-security/dast-iast-sca-deeper-coverage-single-scan/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Micro Focus](https://blog.microfocus.com/digital-transformation-a-proverbial-balancing-act/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Onapsis](https://onapsis.com/blog/five-reasons-why-you-need-vulnerability-management-business-critical-applications-part5?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Qualys](https://blog.qualys.com/qualys-insights/2022/02/15/the-unbearable-lightness-of-unaudited-supply-chains?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Rapid7](https://www.rapid7.com/blog/post/2022/03/02/insightappsec-github-integration-keeps-risky-code-from-reaching-production/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Snyk](https://snyk.io/blog/improve-cloud-coverage-reduce-infrastructure-drift/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Synopsys](https://www.synopsys.com/blogs/software-security/software-bill-of-materials-bom/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Veracode](https://www.veracode.com/blog/intro-appsec/what-sbom-and-why-do-you-need-one?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [WhiteHat Security](https://www.whitehatsec.com/blog/application-security-has-its-best-ever-chance-for-success/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), and [Zimperium](https://blog.zimperium.com/why-the-software-bill-of-materialssbom-must-extend-to-the-mobile-app-supply-chain/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). And that’s just to name a few.

Interestingly, DevSec related features are increasingly appearing as partner integrations *(and likely as an eventual native competitive parity offer)* within collaborative code services such as [GitHub](https://github.blog/2022-02-22-github-advisory-database-now-open-to-community-contributions/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [GitLab](https://about.gitlab.com/blog/2022/02/16/a-community-driven-advisory-database/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

These approaches can be helpful in trying to find a needle… in a fullstack. Right?

So, what about about when the build breaks? Or you just inherited responsibility for a new (to you) codebase that was assembled over a time period longer than your entire career? Or your DevOps and DevSecOps teams are shifting their entire approach to everything in order to embrace an Infrastructure as Code (IaC) ethos?

(https://www.topofthelyne.co/p/sourcegraph-google-for-code?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)**

There is a great quote from the [Top of the Lyne](https://www.topofthelyne.co/p/sourcegraph-google-for-code?s=r&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) writing team that captures why companies like [Sourcegraph](https://sourcegraph.com/search?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) exist and the problem space in general.

***In many companies today, lines of code written decades ago are still deployed in user-facing applications and are often barely holding massive Jenga blocks together.*** – [Rahul Krishnan](https://substack.com/profile/50015753-rahul-krishnan?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Arjun Rakesh](https://substack.com/profile/44710481-arjun-rakesh?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), and [Ruchin Kulkarni](https://substack.com/profile/45698552-ruchin-kulkarni?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

Also, [the whole Top of the Lyne writing team posts high quality memes](https://www.topofthelyne.co/p/sourcegraph-google-for-code?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). [Nice.](https://www.topofthelyne.co/p/sourcegraph-google-for-code?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

It’s fun but true story time. My first use of [Sourcegraph](https://sourcegraph.com/search?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) was a year ago.

It was the umpteenth time to find what I did that broke the builds for my Gatbsy based blog. GitHub, Visual Studio, and diff were not helping me – but [Sourcegraph](https://sourcegraph.com/search?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) let me know it was my lack of attention to detail in edits to package.json, gatsby-config.js, and the working environment where I had failed to run `yarn update @mdx-js-some-really-important-dependency-thing`.

Like the [Jenga blocks analogy](https://www.topofthelyne.co/p/sourcegraph-google-for-code?s=r&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) from [Top of the Lyne](https://www.topofthelyne.co/p/sourcegraph-google-for-code?s=r&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), if you’ve ever dealt with SCA or xAST tooling, then you’ll be familiar with the need for knowing how to manage compliance posture and addressing security concerns.

So, if you haven’t taken a good look at [Sourcegraph](https://sourcegraph.com/search?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), you should. Beyond the *“X for Y”* cliché of *“google search for code”*, using [Sourcegraph](https://sourcegraph.com/search?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) is a paradigm shift in approaching and interacting with any existing or new codebase across the lifecycle of both contributors and the code itself.

Open a new browser tab. Search for [Sourcegraph](https://sourcegraph.com/search?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) – you’re welcome. 🤓

Source:

[www.topofthelyne.co](https://www.topofthelyne.co/p/sourcegraph-google-for-code?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

 **🎶 Still water sometimes runs very deep 🎶**

If [software is eating the world](https://fudge.org/archive/social-telecom-2030/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), then the world is fast becoming an ever larger and ever more varied collection of code. So identifying the costs of time to productive contribution for a new hire on *sprawling high risk high probability high drama committee consensus likely to break the build global monolithic repository* vs. *discrete de-risked specific modular codebase that empowers smaller more autonomous distributed teams* isn’t just a metrics driven mindset – it’s sound fiscal policy.

For example:

**[Beyang Liu](https://twitter.com/beyang/status/1454937232368832522)**

[@beyang](https://twitter.com/beyang/status/1454937232368832522)

Nothing like using @[sourcegraph](https://twitter.com/sourcegraph) to build @[sourcegraph](https://twitter.com/sourcegraph)—we're migrating from global CSS to CSS Modules and our frontend platform team is using Code Insights to track migration progress: <https://t.co/1lRqYjLiwz>

 [6:24 PM - 31 Oct 2021](https://twitter.com/beyang/status/1454937232368832522)

**[HN Comment on Onboarding](https://news.ycombinator.com/item?id=30814406&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)**

Granted, HN comments section are often on the mixed bag karmic spectrum of insightful to floating dumpster fire – but some can be real gems.

*One smaller thing I liked in my career was a job where each new hire was given charge of updating, improving, and editing the “new hire” wiki, which was started by the old hands. It included a brief history of the system, glossary, tutorial, reference links, etc. New hires are expected to ask questions and improve/update it as they go along. Pretty darn useful. Meant most boring, repetitive questions were quickly answered from “cache.”* – [digisign](https://news.ycombinator.com/user?id=digisign&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

Source:

[news.ycombinator.com](https://news.ycombinator.com/item?id=30814406&utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

Now, imagine combining FinOps to DevSecOps in a deeper practice. And for your consideration, the newsletter is once again including a read and a repo to explore the eventuality of [shift-left oriented FinOps DevSecOps combinations](https://sunday.fudge.org/issues/fudge-sunday-once-in-a-pipeline-1084136?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

 **Recommended Read and Repo**

**[Software Supply Chain Security (SSCS)](https://about.sourcegraph.com/blog/real-weakest-link-in-software-supply-chain-security/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)**

Almost every aspect of the IT practitioner experience is moving towards wider adoption of Infrastructure as Code (IaC). As such, the notion of [vulnerability in code](https://github.blog/2020-09-02-secure-your-software-supply-chain-and-protect-against-supply-chain-threats-github-blog/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) is a topic [NIST](https://www.nist.gov/itl/executive-order-improving-nations-cybersecurity/software-supply-chain-security?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [other groups](https://www.dhs.gov/publication/assessment-critical-supply-chains-supporting-us-ict-industry?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) are focused on in the [cybersecurity](https://www.cisa.gov/ict-supply-chain-library?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) realm.

Source:

[about.sourcegraph.com](https://about.sourcegraph.com/blog/real-weakest-link-in-software-supply-chain-security/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

**[Sourcegraph: Universal code search](https://github.com/sourcegraph/sourcegraph?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)**

Sourcegraph has published Universal code search on GitHub for self-hosted projects. While most organizations will opt for a commercially supported approach, the repo approach is a fascinating part of the [Souregraph strategy](https://handbook.sourcegraph.com/strategy-goals/strategy/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)… which is also [published](https://handbook.sourcegraph.com/strategy-goals/strategy/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)!

Source:

[github.com](https://github.com/sourcegraph/sourcegraph?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)

 **Disclosure**

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=sunday.fudge.org&utm_medium=email&utm_source=Revue%20newsletter).
