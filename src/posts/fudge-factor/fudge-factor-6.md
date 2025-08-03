---
title: "Fudge Factor: Edge to Core to Cloud"
description: 'Edition 6 of my new newsletter on our increasingly connected world'
date: 2024-09-08
---
This is Edition 6 of my [newest](/topics/fudge-factor) newsletter on our [increasingly connected](/archive/increasingly-connected) world.

### 🔮 Edge to Core to Cloud and the Evolution of Hyperscale Cloud Service Providers

```Edge to Core to Cloud``` is a marketing phrase that has reached the teenager stage. Originally, the phrase was meant to convey the places *where* data resides by data storage OEMs.

I've frequently used the phrase in public speaking and executive briefings since the early 2010s. Back then, while at [VCE](/topics/vce) (2010-2020), my blogging was primarily internal, focusing on private cloud topics related to converged and hyperconverged infrastructure — a hot topic at the time.

During those years, my public posting[^media] was geared to *private cloud* topics associated with converged and hyperconverged infrastructure. It was a thing. 🤓

[^media]:[My externally published media appearances](https://jaycuthrell.com/media/)

My first uses of ```edge to core to cloud``` on [my blog / newsletter](/archive) back to 2021 when I wrote 100 'Fudge Sunday' posts inspired by song titles and lyrics, which I also compiled into a[^spotify]. Even after a baker's dozen references[^npi], there's still much more to explore on this topic..

[^spotify]:[Fudge Sunday 100 posts playlist](https://open.spotify.com/playlist/2ZALK6TiXvBVztITrrybkN?si=36132ef8be68404a)
[^npi]:[No pun intended, Matt Baker 😉](https://www.youtube.com/watch?v=m6QdS_-Vk5U)

- [What I've been reading lately (Jun 2021)](/archive/fudge-sunday-what-ive-been-reading-lately/)
- [And the way that gravity pulls on everyone (Jul 2021)](/fudge-sunday-and-the-way-that-gravity-pulls-on-everyone/)
- [And All Points In Between (Jul 2021)](/archive/fudge-sunday-and-all-points-in-between/)
- [All Along the Watchtower (Jul 2021)](/archive/fudge-sunday-all-along-the-watchtower/)
- [Get High On a New Thing (Jul 2021)](/archive/fudge-sunday-get-high-on-a-new-thing/)
- [I Don't Know Where I'll Be Tomorrow (Aug 2021)](/archive/fudge-sunday-i-dont-know-where-ill-be-tomorrow/)
- [Gaming, Healthcare, and Convergence (Aug 2021)](/archive/fudge-sunday-gaming-healthcare-and-convergence)
- [A Cold Shot and Chaser (Aug 2022)](/archive/a-cold-shot-and-chaser/)
- [Get It All While You Can (Jul 2022)](/archive/get-it-all-while-you-can/)
- [You Get A Line and I'll Get A Poll Result (Aug 2022)](/archive/you-get-a-line-and-ill-get-a-poll-result/)
- [Buf.build Your REST (Mar 2023)](/archive/bufbuild-your-rest/)
- [Nuance, Repatriation, and iPaaS (Oct 2023)](/archive/nuance-repatriation-and-ipaas/)
- [Interoperability and Convergence Ahead (Jan 2024)](/archive/interoperability-and-convergence-ahead/)

Depending on the context, my use of ```edge to core to cloud``` refers to the various locations where data solutions can be implemented. In the context of product management, ```edge to core to cloud``` addresses the entire spectrum of data needs, from small to large-scale operations.

- ```Edge``` usually refers to edge computing (or distributed computing) which could mean a cloud computing model that is placed at the very edge of a network where data is created, captured, and manipulated.
- ```Core``` usually refers to on-premises data centers which could mean a cloud computing model that would probably be described as a *private cloud*.
- ```Cloud``` might refer to hyperscale cloud service providers like AWS, Azure, GCP, OCI, etc. that would probably be described as a *public cloud* but it doesn't necessarily need to be hyperscale and could easily be a managed service provider (MSP) operating below hyperscale.

> Note: To add to this mix of terms, "hybrid cloud" and "multicloud" or "hybrid multicloud" might be a combination of both ```core``` and ```cloud```. There is even the notion of a "[supercloud](/archive/supercloudbusting/)". Or, you could say "soup to nuts" if the context is ```edge to cloud```. 🍲 🥜

In other words, the computing paradigm begins with where — and that drives the what, why, and how. So, ```edge to core to cloud``` might start with location but that will lead to other differences that dictate architecture and how various resources are allocated for computational purposes.

There are a few generalities to consider for the computing paradigms. However, the general characteristics of these computing paradigms tend to converge over time, creating overlaps that blur the lines between them and make categorization increasingly challenging..

| Computing Paradigm | Location Generalities |
|---|---|
| Edge | Distributed IT infrastructure at the source of data generation nearer to the edge of a network |
| Core | Central data centers or colocation of IT infrastructure |
| Cloud | IT Infrastructure as a Service (IaaS) provided by cloud service providers or managed service providers |

Of course, in the world of business, cost is another distinction. To simplify further, the general trends of capital expense and operating expense are weighted.

| Computing Paradigm | Cost Generalities |
|---|---|
| Edge | Costs are typically based on the extent of distribution as incremental upfront CAPEX with expectations of very low unit pricing with ongoing OPEX |
| Core | Costs are typically based on large centralized upfront CAPEX with relatively high unit pricing and ongoing OPEX |
| Cloud | Costs are typically based on a subscription-based utility pricing model that is purely OPEX |

### 📰 News

Coverage of ```edge to core to cloud``` has favored OEMs in recent years by unbundling hardware appliances in favor of software-only deployable solutions that can be consumed through Hyperscale cloud service provider (CSP) marketplaces or turnkey OPEX hosted within a REIT along with professional services. From the other end, CSPs have seen mixed results by moving further to the ```edge``` and OEM-like appliances and embracing wider ISV/IHV/MSP alliances with unique partner competency specializations.

OEM Examples of moving closer to the ```cloud``` or ```edge```

- Dell Technologies APEX[^dell1] and Edge Services[^dell2]
- HPE GreenLake[^hpe]
- Oracle Internet of Things Suite[^oracle1] 

[^dell1]:[Dell Technologies APEX](https://www.dell.com/en-us/dt/apex/index.htm)
[^dell2]:[Dell Technologies Edge Services](https://www.dell.com/en-ie/lp/dt/edge-services)
[^hpe]:[HPE GreenLake](https://www.hpe.com/us/en/solutions/edge.html)
[^oracle1]:[Oracle Internet of Things Suite](https://docs.oracle.com/en/cloud/saas/internet-of-things-suite/index.html)

CSP Examples of moving closer to the ```core```

- AWS Outposts[^outposts], AWS Local[^local], and Wavelength[^wave]
- Microsoft Azure Stack Hub[^hub], ExpressRoute[^lumen], and Azure Stack Edge[^ase]
- Oracle Engineered Systems[^exa] and Enterprise Communications Platform (ECP)[^oracle2]

[^outposts]:[AWS Outposts](https://aws.amazon.com/outposts/)
[^local]:[AWS Local Zones](https://aws.amazon.com/about-aws/global-infrastructure/localzones/)
[^wave]:[AWS Wavelength](https://aws.amazon.com/wavelength/)
[^hub]:[Microsoft Azure Stack Hub](https://azure.microsoft.com/en-us/products/azure-stack/hub)
[^ase]:[Azure Stack Edge](https://azure.microsoft.com/en-us/products/azure-stack/edge)
[^lumen]:[Microsoft and Lumen Technologies partner to power the future of AI and enable digital transformation to benefit hundreds of millions of customers](https://news.microsoft.com/2024/07/24/microsoft-and-lumen-technologies-partner-to-power-the-future-of-ai-and-enable-digital-transformation-to-benefit-hundreds-of-millions-of-customers/)
[^exa]:[Oracle Engineered Systems](https://www.oracle.com/middleeast/engineered-systems/)
[^oracle2]:[Oracle taps AT&T to connect its enterprise IoT application services](https://www.rcrwireless.com/20240813/internet-of-things-4/oracle-taps-att-to-connect-its-enterprise-iot-application-services)

### 🤖 Technology

As a gentle reminder, Gartner produces a [Magic Quadrant for Global Industrial IoT Platforms](https://www.gartner.com/en/documents/5389163) that is published each year. However, only a small number of hyperscale CSPs are truly participating at the ```edge``` in terms of IoT and IIoT.

- AWS promotes [Greengrass](https://aws.amazon.com/greengrass/).
- Azure promotes [IoT Edge](https://azure.microsoft.com/en-us/products/iot-edge/).

> Note: Google Cloud[^google], IBM Cloud[^ibm], and Akamai[^akamai] have exited the ```edge``` / IoT platforms market.

[^ibm]:[As of 2023, IBM Cloud Watson IoT has been retired.](https://www.theregister.com/2022/11/15/ibm_set_to_retire_watson/)
[^google]:[As of 2023, Google Cloud IoT Core has been retired.](https://www.theregister.com/2022/08/19/google_iot_core_axed/)
[^akamai]:[Akamai IoT Edge Connect will be decommissioned on December 10, 2024.](https://techdocs.akamai.com/iot-edge-connect/docs/welcome-iot-edge-connect)

For these CSPs, processing power will be a fascinating topic as different players make their moves with future roadmaps. For example, the growing need for photonics solutions and practical liquid cooling maintenance solutions from OEMs will be increasingly important for ```edge``` and ```core``` as well as ```cloud```.

| Computing Paradigm | Processing Power |
|---|---|
| Edge | Limited processing power (as compared to core and cloud) optimized for real-time data analysis |
| Core | High processing power for complex workloads and analytics that can scale up (based on CAPEX budget) and scale out within the limits of data center capacity |
| Cloud | Highest scalable processing power for scale up and scale out (based on OPEX budget) for massive datasets and applications within the limits of regions and availability zones |

As for ```cloud```, custom ASICs at CSPs will challenge the notion that AMD, Intel, or NVIDIA are the only chips to consider within AWS and Azure. Furthermore, custom ASICs being used by CSPs will open the possibilities for chips to reach ```edge``` and ```core``` use cases in the future — which might be interesting for the OEMs.

- AWS Graviton[^aws1] (efficiency and performance differentiator)
- AWS Nitro[^aws2] (confidential computing and secure enclaves)
- AWS Trainium[^aws3] (AI/ML training)
- AWS Inferentia[^aws4] (AI/ML inference)
- Azure Maia[^azure8] (AI/ML)
- Azure Cobalt[^azure9] (efficiency and performance differentiator)

> Granted, Google Cloud exited the ```edge``` but there is still room for ```core``` and ```cloud``` if you want fries[^fries] with that perhaps?
>
>- GCP Titanium[^gcp5] (offload)
>- GCP Axion[^gcp6] (efficiency and performance differentiator)
>- GCP TPU series[^gcp7] (AI/ML)

[^fries]:[McDonald's and Google Cloud Announce Strategic Partnership to Connect Latest Cloud Technology and Apply Generative AI Solutions Across its Restaurants Worldwide](https://www.googlecloudpresscorner.com/2023-12-06-McDonalds-and-Google-Cloud-Announce-Strategic-Partnership-to-Connect-Latest-Cloud-Technology-and-Apply-Generative-AI-Solutions-Across-its-Restaurants-Worldwide)

[^aws1]: [AWS Graviton](https://aws.amazon.com/ec2/graviton/)
[^aws2]: [AWS Nitro](https://aws.amazon.com/ec2/nitro/)
[^aws3]: [AWS Trainium](https://aws.amazon.com/machine-learning/trainium/)
[^aws4]: [AWS Inferentia](https://aws.amazon.com/machine-learning/inferentia/)
[^gcp5]: [GCP Titanium](https://cloud.google.com/blog/products/compute/introducing-titanium-confidential-computing-on-google-cloud)
[^gcp6]: [GCP Axion](https://cloud.google.com/blog/products/compute/introducing-google-cloud-arm-based-processor-axion)
[^gcp7]: [GCP TPU series](https://cloud.google.com/tpu)
[^azure8]: [Azure Maia](https://azure.microsoft.com/en-us/blog/azure-announces-preview-of-azure-maia-ai-accelerators-and-azure-cobalt-cpu/)
[^azure9]: [Azure Cobalt](https://azure.microsoft.com/en-us/blog/azure-announces-preview-of-azure-maia-ai-accelerators-and-azure-cobalt-cpu/)

Of course, there are AMD, Intel, and NVIDIA to consider.

- AMD: The continued development and successors to AMD's MI series, Instinct, Alveo, DPU/Pensando, offload, etc. will mean there are competition, enablement, and partnership potentials.
- Intel: As for Intel, it's likely to be a similar story with some decisions pending[^intel1] [^intel2] [^intel3] [^intel4].
- NVIDIA: With NVIDIA, anything seems possible[^nvidia1] [^nvidia2].

[^intel1]:[Sources: Intel's contract manufacturing business has suffered a setback](https://www.techmeme.com/240904/p15#a240904p15)
[^intel2]:[Intel cancels plans to use its Intel 20A process node for its consumer Arrow Lake processors and instead plans to use external nodes, likely from TSMC](https://www.techmeme.com/240905/p3#a240905p3)
[^intel3]:[Sources: Intel is considering selling part of its 88% stake in Mobileye, and is also exploring options for its Network and Edge enterprise networking division](https://www.techmeme.com/240905/p36#a240905p36)
[^intel4]:[Sources: Qualcomm has explored acquiring portions of Intel's design business](https://www.techmeme.com/240906/p3#a240906p3)
[^nvidia1]:[NVIDIA Edge Computing](https://www.nvidia.com/en-us/edge-computing/)
[^nvidia2]:[NVIDIA DGX Cloud](https://www.nvidia.com/en-us/data-center/dgx-cloud/)

Storage of data is a function of the budget envelopes of power, weight, cooling, and geometry in the deployment location. Each envelope has a cost implication for both storage performance and capacity[^solidigm].

[^solidigm]:[Solidigm AI SSD Portfolio](https://news.solidigm.com/en-WW/240188-solidigm-extends-ai-ssd-portfolio-leadership-with-lightning-fast-additions-to-their-d7-product-line)

| Computing Paradigm | Storage Performance and Capacity |
|---|---|
| Edge | Limited capacity with high performance (temporary or caching) |
| Core | Moderate to vast capacity with tiered performance (depending on CAPEX budget for highest performance with tiers for frequently accessed to less frequently accessed to infrequently accessed long-term retention) |
| Cloud | Vast capacity with tiered performance (performance access and frequency of access have the strongest cost function since the economics and architecture are ideally suited for archiving or long-term retention) |

Latency is a particular challenge for ```cloud``` and ```core```, as they are often farther from the data source. In contrast, ```edge``` excels in scenarios requiring real-time decision-making, such as on a factory floor or within a SCADA system, because it's located closer to where data is generated.

| Computing Paradigm | Latency Generalities |
|---|---|
| Edge | Ultra-low latency and real-time decision-making limited by distances |
| Core | Moderate latency based on network architecture and distances |
| Cloud | Variable latency depending on network architecture, connectivity, and geographical distance |

Locality and proximity selections for edge to core to cloud and REITs are (still) not fully software defined. REITs and MSPs are investing in their network fabrics and Network as a Service (NaaS) outcomes. On the CSP side, [AWS Direct Connect, Microsoft Azure ExpressRoute Direct, Oracle Cloud Infrastructure FastConnect, and Google Cloud Platform Dedicated Interconnect](/archive/multicloud-march) seek ```cloud``` connectivity for the lowest distance to the ```core``` where alternative approaches such as network-to-network interface (NNI) can be a lower cost option for an acceptable but nonetheless lowered level of performance.

### 🏗️ Use Cases

Speaking of use cases, the world is not shrinking because the ```edge``` is known for getting larger and larger due to a paradox[^coastline]. Also, the ability to mix and match use cases across computing paradigms means overlapping and often complimentary (hybrid) solutions are required to solve challenges as a continuum.

[^coastline]:[Coastline Paradox](https://en.wikipedia.org/wiki/Coastline_paradox)

| Computing Paradigm | Samples and Examples |
|---|---|
| Edge | Industrial automation, IoT/IIoT applications, real-time analytics, SCADA, healthcare bedside delivery, content delivery networks, ADAS, etc. |
| Core | Data warehousing solutions, data lake houses, enterprise applications, healthcare centralized workloads, business intelligence solutions, end user data processing, etc. |
| Cloud | Big data analytics, machine learning, artificial intelligence, high-performance computing, healthcare aggregated workloads, etc. |

### 📐 Standards

For CSPs, security related standards are always evolving and improving with an emphasis on scale that moves the industry towards policy as code (PaC). From the policy perspective, groups such as CNCF[^cncf] bring together working groups[^notes] to apply ```cloud``` thinking to the ```edge``` that can also be used in the ```core```.

[^cncf]:[Edge Native Design Behaviors Explained](https://www.cncf.io/blog/2024/01/25/edge-native-design-behaviors-explained/)
[^notes]:[CNCF IoT Edge Working Group Meeting Information, Agenda and Notes](https://docs.google.com/document/d/1Yuwy9IO4X6XKq2wLW0pVZn5yHQxlyK7wdYBZBXRWiKI/edit#heading=h.x7eowycdcihh)

| Computing Paradigm | Security Considerations |
|---|---|
| Edge | May offer increased physical security and control over data but simultaneously requires additional physical hardening investments that may include fully isolated architectures that have no connectivity to the public internet (fully air-gapped, dark sites, etc.) |
| Core | Offers security dependent upon the on-premises infrastructure as well as staff / trusted third-parties with physical and logical access expertise |
| Cloud | Typically shared responsibility models relies on the CSP security measures and compliance certifications combined with the RACI matrix elements that are jointly owned by the CSP and end customer / trusted third-parties or owned entirely by the end customer with an underlying chain of trust for operational services outside of customer controls |

#### Management

| Computing Paradigm | Management Description |
|---|---|
| Edge | Requires specialized expertise for managing distributed edge devices |
| Core | Requires IT staff for on-premises infrastructure management |
| Cloud | Managed by cloud service provider, reduces operational overhead |

### 🗣️ Analysis

[![Google Trends y'all](/assets/images/screenshots/2024-09-08-11-58-15.png)](https://trends.google.com/trends/explore?date=all&q=edge%20computing,cloud%20computing,data%20center&hl=en)

This market will experience dynamic convergence. The convergence will be driven by the OEM's business model and the CSP's connectivity capabilities.

Somewhere in the middle (i.e. REITs and CSP marketplaces) is an example that will provide the benefits of the CSP in terms of OPEX combined with the flexibility to deploy in any location. It's unclear which player will offer the most effective management and operations control plane for diverse deployments.

Vertical integration may only be feasible if open interoperability standards fail and there's a persistent lack of global government oversight to ensure fair competition. The good news is when presented with market opportunity, partnerships, and alliances based on open standards have been (arguably) more successful than any one company attempting to own and control a stack from top to bottom — or governments have stepped in to limit M&A up front or break monopolistic single companies apart afterwards.

In my opinion, it is very reasonable to expect the Oracle and IBM model of technology, software, services, and a cloud to become an exit pattern for other OEM companies like Dell Technologies, HPE, Lenovo, Cisco, and other smaller players. The only question is if the pattern is M&A, carve out divestitures, or long term partnerships driving alliance arrangements to be better together with AWS, Azure, GCP, or another CSP that emerges later.

As I would say in my past "Fudge Sunday" series — place your bets.

### 🗓️ Events

It is worth noting the CSPs are *growing* their conferences while OEM's *seem to be shrinking* their conferences. However, I'll reserve commentary on that trend for another time as it requires a bit more nuanced quantitative analysis.

- Oracle CloudWorld[^openworld] September 9–12, 2024, in Las Vegas
- Microsoft Ignite[^ignite] November 19–22, 2024, in Chicago
- AWS re:Invent[^reinvent] December 2 – 6, 2024, in Las Vegas
- Google Cloud Next[^next] April 9–11, 2025, in Las Vegas

[^reinvent]:[AWS re:Invent 2024](https://reinvent.awsevents.com)
[^ignite]:[Microsoft Ignite 2024](https://ignite.microsoft.com/en-US/home)
[^next]:[Google Cloud Next 2025](https://cloud.withgoogle.com/next)
[^openworld]:[Oracle CloudWorld 2024](https://www.oracle.com/cloudworld/)

> At just under 2500 words and just over 3 dozen footnotes, that's all this week. 🤓

## Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).
