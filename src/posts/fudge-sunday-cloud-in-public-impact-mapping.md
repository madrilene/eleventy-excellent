---
title: "Fudge Sunday - Cloud in Public: Impact Mapping"
description: 'A look at public things for a public cloud'
date: 2021-11-01 00:00:00+00:00
---
This week we continue to take a look at public things for a public cloud.

☁️✅⚠️🛑

This issue is part 5 of a 5 part series

1. [Fudge Sunday - Cloud in Public: Status Dashboards](/archive/fudge-sunday-cloud-in-public-status-dashboards/)
2. [Fudge Sunday - Cloud in Public: Engineering SLO](/archive/fudge-sunday-cloud-in-public-engineering-slo/)
3. [Fudge Sunday - Cloud in Public: DevCommsOps](/archive/fudge-sunday-cloud-in-public-devcommsops/)
4. [Fudge Sunday - Cloud in Public: Mean Time To RCA](/archive/fudge-sunday-cloud-in-public-mean-time-to-rca/)
5. [Fudge Sunday - Cloud in Public: Impact Mapping](/archive/fudge-sunday-cloud-in-public-impact-mapping/)

As of this issue, we now have historical perspectives and definitions for [status dashboards](https://sunday.fudge.org/issues/fudge-sunday-cloud-in-public-status-dashboards-783150?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), [Engineering SLO](https://sunday.fudge.org/archive/794553?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), [DevCommsOps](https://sunday.fudge.org/issues/fudge-sunday-cloud-in-public-devcommsops-805563?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), and [Mean Time to RCA](https://sunday.fudge.org/issues/fudge-sunday-cloud-in-public-mean-time-to-rca-815545?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). Next, let’s talk about the increasing importance of dependency mapping across hyperscale public cloud service providers and consider [business value engineering](https://www.youtube.com/watch?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter&v=_EEJXAuryS8) and customer journeys.

 **Impact Mapping in practice**

Over the past four weeks, we covered *Who*, *What*, *Where, and When* for cloud companies that “write it down” to pursue goals for [The Perfect Team](https://fudge.org/archive/the-perfect-team/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter). This issue will get to the final remaining question: *Why*.

To get an understanding of Impact Mapping, you could start with a book of the same title. For now, assume Impact Mapping answers the question, *Why*.

The answer? *“Because that’s what the business needs.”*

**[Making a Big Impact with Software Products and Projects](https://www.thriftbooks.com/w/impact-mapping-making-a-big-impact-with-software-products-and-projects_gojko-adzic/8847273/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#isbn=0955683645)**

Just around a decade ago, [Gojko Adzic](https://twitter.com/gojkoadzic?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) provided a practical guide to [impact mapping](https://www.impactmapping.org?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). In a nutshell, impact mapping helps ensure the alignment of business and delivery.

[www.thriftbooks.com](https://www.thriftbooks.com/w/impact-mapping-making-a-big-impact-with-software-products-and-projects_gojko-adzic/8847273/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#isbn=0955683645)

Impact Mapping can be challenging because the public cloud is increasingly less about public access than private considerations for the public of specific places. Effectively, this means that Impact Mapping should consider the technology stack **and** the operating geography for the laws or regulatory landscape that may also evolve.

**[[email protected]](https://web.archive.org/web/20230000000000*/https://twitter.com/jaycuthrell/status/1454879951895900165)**

[@JayCuthrell](https://web.archive.org/web/20230000000000*/https://twitter.com/jaycuthrell/status/1454879951895900165)

+15 years: Hyperscale public cloud service providers invest to enable globally diverse infrastructure to support well-architected frameworks.💰☁️  
  
+15 months: GAIA-X Policy Rules and Architecture of Standards support geopolitical data sovereignty and balkanization frameworks.⚖️🤔 <https://t.co/hv5wZJfOyA>

 [2:36 PM - 31 Oct 2021](https://web.archive.org/web/20230000000000*/https://twitter.com/jaycuthrell/status/1454879951895900165)

 **Let's restate how we got here**

Thinking back to our first issue and the inspiration for this series, Impact Mapping is meant to combine the “Service architecture documentation” and “Documented service dependency maps” from the [blog post](https://cloudpundit.com/2021/09/22/the-cloud-is-not-just-someone-elses-computer/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter) from [@cloudpundit](https://twitter.com/cloudpundit?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).

The “Service architecture documentation”

“helps us understand the ways a service is and isn’t resilient, so we can design accordingly”

The “Documented service dependency maps”

allow us to see the chain of dependencies for each of the services we use, allowing us to think about if Service X is really the best fallback alternative if Service Y goes down, as well as inform our troubleshooting"

When looking for evidence of Impact Mapping in hyperscale public cloud service providers, we can survey public information. Once again, the list is in no particular order or weighting other than shorter names to longer names.

IBM Cloud Impact Mapping examples:

* [IBM Cloud Architecture Center](https://www.ibm.com/cloud/architecture?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) promotes seven architectural decision points to achieve 1. Open hybrid cloud platform, 2. Data Fabric, 3. Business Automation, 4. Observability, 5. Security, 6. Regulated workloads, 7. IBM Z (which calls out 1.)
* [IBM Clouds’s principles of chaos engineering](https://www.ibm.com/cloud/architecture/architecture/practices/chaos-engineering-principles/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) is a call to action for learning to use [Gremlin](https://www.gremlin.com/community/tutorials/chaos-engineering-using-gremlin-on-ibm-cloud/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and applying the lessons learned.
* [IBM Cloud’s Terraform scripts](https://github.com/IBM-Cloud/vpc-ha-iac?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) offer an Infrastructure as Code (IAC) way to build with resilience in mind on IBM Cloud.

Alibaba Cloud Impact Mapping examples:

* [Alibaba Cloud’s Well-Architected Framework](https://www.alibabacloud.com/architecture/index?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) promotes a “three pillars” approach to achieve 1. Reliability, 2. Security, and 3. Performance
* [Alibaba Cloud’s ChaosBlade](https://github.com/chaosblade-io/chaosblade?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) offers an open-source approach to chaos engineering based upon the internal Alibaba Cloud Application High Availability Service (AHAS), MonkeyKing (fault drill platform), and chaos engineering tool.

Microsoft Impact Mapping examples:

* [Microsoft Azure Well-Architected Framework](https://docs.microsoft.com/en-us/azure/architecture/framework/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) promotes a “five pillars” approach to achieve 1. Reliability, 2. Security, 3. Cost Optimization, 4. Operational Excellence, 5. Performance Efficiency
* [Multicloud Solutions](https://docs.microsoft.com/en-us/azure/architecture/aws-professional/services?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) provides an AWS and Azure comparison chart to promote choice, flexibility, mitigate risk, and map dependencies.
* [Azure Monitor VM insights and Service Map](https://docs.microsoft.com/en-us/azure/azure-monitor/vm/service-map?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) collects and analyzes the telemetry associated with [VMs](https://docs.microsoft.com/en-us/azure/azure-monitor/vm/service-map?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [applications](https://docs.microsoft.com/en-us/azure/azure-monitor/vm/vminsights-maps?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter)
* [Chaos engineering](https://docs.microsoft.com/en-us/azure/architecture/framework/resiliency/chaos-engineering?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) is a call to action for learning about canary releases, test in production, fault injection, and applying lessons learned.

Amazon Web Services Impact Mapping examples:

* [AWS Architecture Center (Well-Architected Framework)](https://aws.amazon.com/architecture/well-architected/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) promotes a “five pillars” approach to achieve 1. Operational Excellence, 2. Security, 3. Reliability, 4. Performance Efficiency, 5. Cost Optimization
* [AWS Cloud Map (Service discovery for cloud resources)](https://aws.amazon.com/cloud-map/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) creates and maintains custom maps of applications that includes updated location for dynamically changing application resources.
* [AWS Fault Injection Simulator and AWS CodePipeline](https://aws.amazon.com/blogs/architecture/chaos-testing-with-aws-fault-injection-simulator-and-aws-codepipeline/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) represent a call to action to adopt chaos engineering principles and apply the lessons learned.

Google Cloud Platform Impact Mapping examples:

* [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) promotes a “six pillars” approach to achieve 1. System Design, 2. Operational Excellence, 3. Security (Privacy and Compliance), 4. Reliability, 5. Cost Optimization, 6. Performance Optimization.
* [Google Blog posts](https://cloud.google.com/blog/topics/hybrid-cloud/how-to-do-multicloud-right-according-to-experts?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) are a call to action for learning about chaos engineering, [SRE principles](https://cloud.google.com/blog/products/management-tools/shrinking-the-time-to-mitigate-production-incidents?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), Disaster Recover Training (DiRT), and applying the lessons learned.

Oracle Cloud Infrastructure Impact Mapping examples:

* [Oracle Cloud Infrastructure Best Practices Framework](https://blogs.oracle.com/cloud-infrastructure/post/announcing-oracle-cloud-infrastructure-best-practices-framework?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) promotes a “four pillars” approach to achieve 1. Security (and Compliance), 2. Reliability (and Resilience), 3. Performance (and Cost Optimization), 4. Operational Efficiency
* [Oracle Cloud Service Mapping](https://www.oracle.com/cloud/iaas/cloud-service-mapping.html?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) provides an [AWS](https://docs.oracle.com/en/solutions/oci-for-aws-professionals/index.html?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#GUID-CD0E016D-AC8A-4A18-BE78-0FD7A3E1C64E), [Azure](https://docs.oracle.com/en/solutions/oci-for-azure-professionals/index.html?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter#GUID-F2E1DCD1-E212-42F5-A25E-EA66CC2743FD), and Google Cloud comparison chart to promote choice, flexibility, mitigate risk, and map dependencies.
* [Oracle Cloud Blog posts](https://blogs.oracle.com/maa/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) are a call to action for building [multicloud networks for business continuity](https://blogs.oracle.com/maa/post/build-multicloud-networks-for-business-continuity-using-oracle-maximum-availability-architecture-maa-part-3?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) using [Oracle Maximum Availability Architecture (MAA)](https://www.oracle.com/database/technologies/high-availability/maa.html?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) and [chaos engineering concepts](https://blogs.oracle.com/maa/post/oracle-maximum-availability-architecture-and-chaos-engineering-part-1?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

Notes:

* For this sampling, there was no access to consoles (portals) required.
* IBM Cloud information linked to IBM Services for frameworks references which made “pillars” comparisons difficult.

 **Findings**

In summary, there are **incredibly** **stark variations** amongst the hyperscalers in expressing Impact Mapping. Further, it is reasonable to expect the market will drive demand for standards that normalize the variations or promote wider adoption of approaches such as [the C4 model](https://c4model.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

* ***Oracle Cloud emphasis is on 1. Security (and Compliance)*** whereas Alibaba Cloud, AWS, and Azure place emphasis on 2. Security and Google Cloud at 3. Security (Privacy and Compliance)
* ***AWS emphasis is on 1. Operational Excellence*** whereas Google Cloud has 2. Operational Excellence and both Azure and Oracle Cloud has 4. Operational Excellence (Efficiency)
* ***Alibaba Cloud and Azure emphasis is on 1. Reliability*** whereas Oracle Cloud has 2. Reliability (and Resilience), AWS has 3. Reliability, and Google Cloud has 4. Reliability
* ***Google Cloud emphasis is on 1. System Design*** curiously with no comparable pillars to others since the end goal is to drive towards documentation, decoupling, and managed services adoption before seeking similar pillars of other frameworks.
* ***Azure and Oracle Cloud emphasis is on 3. Cost Optimization*** whereas AWS and Google Cloud has 5. Cost Optimization
* ***Emphasis on Performance is the last or next to last pillar for Alibaba Cloud, Azure, AWS, Oracle Cloud, and Google Cloud.***
* Looking back across these five newsletter issues, (stark) variations discovered seem to mirror similar findings from my blog post from March 2021 [Multicloud March](https://fudge.org/archive/multicloud-march/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) on low latency high bandwidth connectivity options.

 **Conclusions**

Cloud in Public findings on [Status Dashboards](https://sunday.fudge.org/issues/fudge-sunday-cloud-in-public-status-dashboards-783150?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), [Engineering SLO](https://sunday.fudge.org/archive/794553?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), [DevCommsOps](https://sunday.fudge.org/issues/fudge-sunday-cloud-in-public-devcommsops-805563?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter), [Mean Time to RCA](https://sunday.fudge.org/issues/fudge-sunday-cloud-in-public-mean-time-to-rca-815545?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), and [Impact Mapping](https://sunday.fudge.org/archive/826383?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) will not be static. As such, we want to understand what the *Who, What, Where, When, and Why* means in terms of [business value engineering](https://www.youtube.com/watch?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter&v=_EEJXAuryS8).

So, let’s get a quick overview of [business value engineering](https://www.youtube.com/watch?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter&v=_EEJXAuryS8) and think about the customer journey.

[![Matt Smith, IFS discussing Business Value Engineering on SiliconANGLE Media's theCUBE](https://cuthrell.com/favicon.png "Matt Smith, IFS discussing Business Value Engineering on SiliconANGLE Media's theCUBE")](https://cuthrell.com/favicon.png)Matt Smith, IFS discussing Business Value Engineering on SiliconANGLE Media's theCUBE

Each hyperscale public cloud service provider will have to anticipate customers at various stages of a journey from status quo to one cloud or [the eventuality of mutlicloud](https://fudge.org/archive/multicloud-march/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). So, having a business value engineering framework in place will ensure the following:

1. Key business initiatives prioritization
2. Key stakeholders in a living RACI matrix
3. [Structured Decision-making frameworks](https://www.bain.com/insights/decision-insights-11-how-organizations-make-great-decisions/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) applied (Facts, Alternatives, Commitments, etc.)
4. Predictions are possible because data, telemetry, and instrumentation enable the proper well-architected framework underpinned with the right technology at the right time
5. Continuous improvement drives this back to step 1 again and again.

To state this another way, let’s loosely paraphrase Dean of Big Data [Bill Schmarzo](https://www.linkedin.com/in/schmarzo/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) on the essential nature of step 4 and the *WHILE*.

The hyperscale cloud service provider must help customers achieve their initiatives ***WHILE*** they are conducting their present operational reality.

Help might come from so-called cloud pricing calculators like [AWS Pricing Calculator](https://calculator.aws?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Google Cloud Pricing Calculator,](https://cloud.google.com/products/calculator?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter) [Oracle Cloud Cost Estimator](https://www.oracle.com/cloud/cost-estimator.html?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [IBM Cloud Cost Estimator](https://www.ibm.com/cloud/cloud-calculator?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), or [Alibaba Cloud Price Calculator](https://www.alibabacloud.com/pricing-calculator?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter). However, in each example, there is no solid connection to Impact Mapping that permits building the business case with accurate modeling well in advance of OPEX decisions in any quantified manner.

Eventually, each hyperscale cloud service provider inputs from real-time pricing API or their calculators and estimators will become a consideration for business value engineering tools. So, keep an eye on tools companies for Impact Mapping updates for business value engineering (by alphabetical order) such as [DecisionLink ValueCloud](https://www.decisionlink.com/products-overview/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [Mainstay Advisor Value Platform](https://mainstayadvisor.com?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), [MediaFly Value Story Alinean](https://www.mediafly.com/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter), and [VisualizeROI](https://visualizeroi.com/value-management-leaders/?utm_campaign=Start%20the%20week%20more%20informed&utm_medium=email&utm_source=Revue%20newsletter).

Ultimately, partnering with customers in business performance improvement terms is the only way hyperscale public cloud service providers will have an enduring competitive advantage. As such, each hyperscale public cloud service provider will need to make strategic investments that help the customer uncover the highest value opportunities to leverage the proper well-architected framework that is underpinned with the right technology – and at the right time.

 **Disclosure**

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/?utm_campaign=Fudge%20Sunday&utm_medium=email&utm_source=Revue%20newsletter).
