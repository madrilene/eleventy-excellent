---
title: "Fudge Factor: Practical IIoT"
description: 'Edition 5 of my new newsletter on our increasingly connected world'
date: 2024-09-01
---
This is Edition 5 of my [newest](/archive/fudge-factor) newsletter on our [increasingly connected](/archive/increasingly-connected) world.

### 🔮 Integrating the Future with Legacy Systems

IoT devices for consumers are increasingly common and the Connectivity Standards Alliance (CSA)[^csa] has existed for just over two decades. Recently, CSA  announced[^csa-iot] an IoT device security specification.

[^csa]:[About CSA](https://csa-iot.org/about/)
[^csa-iot]:[The Connectivity Standards Alliance Product Security Working Group Launches the IoT Device Security Specification 1.0](https://csa-iot.org/newsroom/the-connectivity-standards-alliance-product-security-working-group-launches-the-iot-device-security-specification-1-0/)

Of course, industries like agriculture, retail, manufacturing, and utilities have existed far longer than [IoT](/topics/iot) has. As such, when approaching Industrial IoT ([IIoT](/topics/iiot)), there are many challenges to address and overcome.

Some of these [IIoT](/topics/iiot) related challenges have been making headlines in recent years.

### 📰 News

When cybersecurity meets SCADA or industrial controls the first thing most people would imagine is a mix of movie tropes and actual news. If your recent memories prove that IIoT and security are newsworthy, you aren't imagining it and the truth has been stranger than fiction in some cases.

The past 15 years of connecting devices to networks or exposing those devices on the Internet has resulted in stories like Stuxnet, water utilities pumps being damaged, hacking of smart power meters, and periodic disclosures by ethical hackers showing how IoT and IIoT devices are not well protected from attacks over the networks these devices are connected to. There are bad actors making news and there are likely bad actors operating at thresholds just below detection to avoid becoming newsworthy — until they do.

Just a few years ago, surveys indicated 94% of security teams[^survey] see some form of attack on IIoT systems across IT and OT. Today, the risk of attack[^risk] is only increasing.

[^survey]:[2022: Survey shows 94% of IIoT or OT systems faced some form of attack](https://www.techmeme.com/220713/p21#a220713p21)
[^risk]:[A Look at the Riskiest Connected Devices of 2024](https://www.darkreading.com/cyber-risk/riskiest-connected-devices-2024)

At this point, you might be asking if IIoT is a good idea. Well, it is actually — but even good ideas demand better execution and vigilant attention to improvements over time.

Next, let's examine where technology is helping make [IIoT](/topics/iiot) succeed.

### 🤖 Technology

Gartner produces a [Magic Quadrant for Global Industrial IoT Platforms](https://www.gartner.com/en/documents/5389163) that is published each year.

[![Gartner Magic Quadrant for Global Industrial loT Platforms](/assets/images/screenshots/2024-09-01-21-46-34.png)](https://www.gartner.com/en/documents/5389163)

The clustering in the lower left is an indication that IIoT is quite complex, fractured, and competitive. Shifting to the upper right, it's worth noting that there are two cloud service providers.

Notably, almost all cloud service providers made IIoT (or IoT) bets in the past but some are making the case for solving cybersecurity challenges with partnerships and architectures that involve data diodes and localization of A.I. computation.

AWS promotes [cloud-based SCADA systems](https://aws.amazon.com/blogs/industries/improve-your-industrial-operations-with-cloud-scada/) and [securely sending industrial data using unidirectional gateways](https://aws.amazon.com/blogs/iot/securely-sending-industrial-data-to-aws-iot-services-using-unidirectional-gateways/) with [Greengrass](https://aws.amazon.com/greengrass/).

Azure promotes [manufacturers shop floor A.I.](https://www.microsoft.com/en-us/industry/blog/manufacturing-and-mobility/2024/06/20/6-findings-from-iot-signals-report-manufacturers-prepare-their-shop-floor-for-ai/) and [industrial transformation strategy](https://azure.microsoft.com/en-us/blog/azure-iots-industrial-transformation-strategy-on-display-at-hannover-messe-2024/) with [IoT Edge](https://azure.microsoft.com/en-us/products/iot-edge/).

If you were wondering about Google Cloud[^google] or IBM Cloud[^ibm], the short answer is use their partners instead now that both have exited the IoT platforms market as of 2023. As for why IoT platform initiatives might be retired by large cloud providers (Oracle too), after we consider the news, technology, use cases, and standards, it is important to remember that IIoT is still a rapidly shifting market worthy of more analysis.

[^ibm]:[As of 2023, IBM Cloud Watson IoT has been retired.](https://www.theregister.com/2022/11/15/ibm_set_to_retire_watson/)
[^google]:[As of 2023, Google Cloud IoT Core has been retired.](https://www.theregister.com/2022/08/19/google_iot_core_axed/)

However, it isn't up to cloud service providers alone to push technology forward. Rather, there are multiple IIoT technology advancements that are exciting.

- 🛜 Generally speaking, technology convergence such as 5G and A.I. computation is enabling data to be processed with greater locality. Meanwhile, LPWANs[^LPWANs] are offering low-power networks for remote IIoT devices.
- 🔋 Recharging batteries in adverse conditions is not a strong pattern for IIoT either. Lithium thionyl chloride (LiSOCL2)[^battery] battery chemistry developments enable longer lived applications where recharging is not desirable or possible during the lifecycle of the IIoT device.
- 🧑‍💻 Software application development for IIoT also requires progressive improvements to wider access to more contributors. Node-RED, a flow-based [low-code](/topics/lowcode) programming tool for IIoT event-driven applications, just reached version 4.0.[^nodered]

[^LPWANs]:[LPWANs](https://en.wikipedia.org/wiki/Low-power_wide-area_network)
[^battery]:[Advanced Lithium Batteries Can Power Devices for Decades](https://www.automationworld.com/factory/digital-transformation/article/33037223/advanced-lithium-batteries-can-power-devices-for-decades)
[^nodered]:[Node-RED flow-based low-code programming tool for IIoT event-driven applications](https://nodered.org/blog/2024/06/20/version-4-0-released)

Next, let's ponder [IIoT](/topics/iiot) use cases.

### 🏗️ Use Cases

There is more that IIoT can enable than just predictive maintenance data gathering. Let's look at goals, approaches, and impacts.

| Goal    | | Approach    | | Impacts    |
| :--- | - |  :----------------------------- | - | :------: |
| Future-proof
🔮 |   | Integrate legacy systems with emerging technologies for competitive operations and future-ready innovations. |   | All Industries |
| Visibility
👁️ | | Implement IIoT, edge computing, and digital twins to enhance transparency and gain end-to-end insights. | | Manufacturing, Logistics, Retail |
| Sustainability
🌱 | | Utilize IIoT with machine learning to drive environmentally responsible practices. | | All Industries |
| Decisions
🤔 | | Transform generated data into actionable insights for informed decision-making and continuous improvement. | | All Industries |
| Empowerment
💪🏾 | | Enhance frontline worker productivity and safety with digital instructions, augmented reality, and wearables. | | All Industries |
| Cobots
🦾 | | Enable human-in-the-loop (HITL) collaborative robots to increase productivity in a safer work environment. | | Manufacturing, Logistics, Warehousing |

In terms of enabling precision automation and robotics at scale, IIoT could extend from farms to factories. This could also include attestation of supply chains that can track an ingredient or component from farm or factory to the fully consumed outcomes.

Along the way, forecasting of utilities consumption could be correlated with the optimization for agriculture, industrial processes, and SCADA. By approaching each consumption pattern using digital twins, societies could benefit from vastly improved utilization of finite energy sources and other shared resources.

Next, let's review [IIoT](/topics/iiot) standards.

### 📐 Standards

As a reminder, past editions of this newsletter touched upon [IIoT](/topics/iiot) topics and standards in [Make IIoT Easy On Yourself](/archive/make-iiot-easy-on-yourself/).

Since IIoT often involves deployment in harsh or hazardous conditions, adhering to ATEX[^atex114] (EU), IECEx[^iecex] (International), and UL[^ul] (US) standards is crucial for safety, compliance, reliability, interoperability, and wider global market adoption.

[^iecex]:[IECEx](https://www.iecex.com/information/frequently-asked-questions/)

[^atex114]:[ATEX 114](https://www.processsensing.com/en-us/blog/understanding-atex-iecex-hazardous-areas.htm)

[^ul]:[UL](https://www.ul.com/services/cybersecurity/industry-40-cybersecurity)

For industrial automation and control systems (IACS), the news cycle has shown the need for pragmatic cybersecurity approaches for both IT and OT. Over time, cybersecurity considerations have driven the ISA/IEC 62443[^isa] standard.

[^isa]:[ISA/IEC 62443 Series of Standards](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards)

### 🗣️ Analysis

![BEFORE THERE WAS INDUSTRY 4.0; THERE WAS INDUSTRY 0.1 ALPHA BUILD (23456)](/assets/images/screenshots/2024-09-01-23-10-54.png)

Integrating with legacy industry systems to be connected to other modern systems requires robust security measures and scalable solutions. Trends and cybersecurity threats aside, the ability to execute IIoT will not be a push-button moment or the flip of a switch — it is very early days for getting data securely from IIoT devices at scale in a sustainable, repeatable, and advisable manner.

When I started to write this edition of the newsletter, it occurred to me that I have been involved in data capture throughout my career. Even in one of my first jobs in the late 1980s as a lab assistant, being hunched over a microscope and counting oyster larvae, then writing counts from samples on paper that would eventually be entered again into a computer for statistical analysis.

Later, in the early 1990s, once again, I would find myself hunched over a microscope, but this time connecting tiny electrical leads to gold sputtered thin films for automated measurement to perform characterizations with equipment connected to a Windows PC via IEEE-488 and RS-232 controllers. However, this time the data would go directly to a floppy disk, which I would sneaker net over to a Mac on LocalTalk connected to a GatorBox bridge to a wired local area network using Ethernet for transfer to a Unix file system, capable of being accessed over the Internet.

Fast-forwarding to the modern 2020s, my work with various clients and customers are still rooted in the need to access data. However, the new elements are modern ICT transport, cloud operations, security, and resilience.

Oh, also, my recent work doesn't involve oyster babies or inhaling volatile lead based compounds affixed to a hot plate. [That's progress](https://www.youtube.com/watch?v=pBWcRqPesws). 😂

The IIoT technologies of the next decade will be the result of increasing appetites and expectations for secure streamlined machine to machine communication, simplified software application development, A.I. assisted data driven insights, and solved cybersecurity challenges. Maturity in IIoT will come but not before many failures and learnings from those failures.

### 🗓️ Events

If you have an interest in gaining greater exposure to commercialized IIoT, the following events might be worth considering.

- MxD (Manufacturing x Digital)[^mxd] September 17, 2024 8:00 AM - September 18, 2024 in the USA
- Wireless Congress: Systems & Applications[^wc] Nov 13, 2024 - Nov 14, 2024 in Germany
- Industrial Internet Consortium Hannover Messe[^hm] March 31, 2025 - April 04, 2025 in Germany
- IoT World Congress[^iotwc] May 13 2024 - May 15, 2025 in Spain

[^mxd]:[MxD’s 10-Year Anniversary Celebration & Annual Summit](https://members.mxdusa.org/events/90346)
[^wc]:[Wireless Congress: Systems & Applications](https://events.weka-fachmedien.de/wireless-congress/)
[^hm]:[Hannover Messe](https://www.hannovermesse.de/en/)
[^iotwc]:[IoT World Congress](https://www.iotsworldcongress.com/)

> At just under 1500 words, that's all this week. 🤓

## Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).
