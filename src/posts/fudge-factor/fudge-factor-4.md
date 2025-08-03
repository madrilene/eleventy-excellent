---
title: "Fudge Factor: Telemetry Challenges"
description: 'Edition 4 of my new newsletter on our increasingly connected world'
date: 2024-08-25
---
This is Edition 4 of my [newest](/archive/fudge-factor) newsletter on our [increasingly connected](/archive/increasingly-connected) world.

### 🔮 Telemetry Challenges in Extreme Conditions and Harsh Environments

Within the typical office, home, or a comfortable outdoor setting, there are usually ideal conditions and stable environments for Internet of Things ([IoT](/topics/iot)) telemetry over WiFI, Bluetooth, NFC, etc. For example, a "smart" bathroom scale might only have to contend with humidity from a nearby shower and our "smart" watch might get a little wet in that same shower.

However, industrial IoT ([IIoT](/topics/iiot))  and telemetry systems operating in harsh environments and more extreme conditions must contend with a variety of factors that can have a deleterious impact on data transmission and accuracy. Such challenges for effective telemetry have given rise to multiple "fudge factors" that are applied to ensure reliable data collection and communication.

A small sample of these considerations might include the following:

- Temperature Compensation: Systems operating in refractories, forging facilities, cold chains, space, or deep-sea environments may include adjustments for extreme temperature variations.
- Radiation Shielding: One of the most popular articles on this website is [Artemis, Radiation Hardening, and IPFS](/archive/artemis-radiation-hardening-and-ipfs/). Space and certain industrial processes require unique solutions to account for higher-than-expected radiation levels.
- Pressure Compensation: Operating in deep-sea environments or deep within the Earth's crust requires handling variations in extreme pressures.
- Error Correction: As telemetry extends over greater distances there are additional redundancies required in data transmission to account for potential signal degradation.
- Latency Adjustments: Errors aside, awaiting data also requires accounting for variations with time buffers to compensate for both expected and unexpected delays.
- Noise Filtering: Applying algorithms provides a squelch knob to help extract signal from the noise by filtering to account for unpredictable environmental noise.
- Battery Life Estimates: Applying conservative estimates that ensure consistent operation to the anticipation of what-if scenarios helps determine the planned operating life of systems involved in telemetry.
- Solar Power Calculations: When systems are able to benefit from solar power, there are factors applied for the ideal, the worst case, and the points in between.
- Sensor Calibration: As mentioned in [Fudge Factor: Calibration and Validation](/archive/fudge-factor-calibration-and-validation/), Regular [cal/val](/topics/cal-val) is also part of the need to account for sensor drift in harsh environments.
- Data Integrity: Various data integrity techniques might involve additional verification steps or redundancy and growing needs for security.

Again, this list could easily elongate as it is just a sample. Next, let's look at where telemetry is making headlines.

### 📰 News

Resilient telemetry solutions are growing in demand as multiple industries expand into more extreme environments. News headlines that highlight the art and science of telemetry are becoming more common.

- NASA's Mars Relay Network (MRN) [^mrn] and occultation experiments between Mars Express (MEX) and Trace Gas Orbiter (TGO) [^mars] are adding to our understanding of practical interplanetary telemetry techniques.
- Marine exploration advances involve telemetry systems being developed and deployed to learn more about aquatic life [^seabass] and geology while handling the immense pressures and corrosive conditions [^deep] of deep-sea environments.

[^mrn]:[Mars Relay Network (MRN)](https://science.nasa.gov/planetary-science/programs/mars-exploration/mars-relay-network-interplanetary-internet/)

[^mars]:[First Results of Mars Express (MEX) - ExoMars Trace Gas Orbiter (TGO) Mutual Radio Occultation](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2023RS007873)

[^seabass]:[Elucidating the migrations of European seabass from the southern north sea using mark-recapture data, acoustic telemetry and data storage tags](https://www.nature.com/articles/s41598-024-63347-7)

[^deep]:[Marine Telemetry: Shedding Light Below the Waves](https://www.marinetechnologynews.com/news/marine-telemetry-shedding-light-628841)

### 🤖 Technology

Multiple advancements in technology are offering promise for overcoming various telemetry challenges. These advances span computer science as well as currently shipping industrial solutions.

- AI/ML and hyperscale cloud service provider resources are being integrated to predict and mitigate potential telemetry failures by analyzing [^aws] environmental data patterns.
- Edge computing for unique use cases [^outposts] and industrial form factor solutions are enabling greater processing of data closer to the source, reducing latency, increasing the reliability of telemetry data in vast numbers of remote locations.
- Data integrity techniques are being used to ensure the traceability and security of telemetry data, crucial for maintaining accuracy [^fab] in harsh environments.

[^aws]:[Satellite mission operations using artificial intelligence on AWS](https://aws.amazon.com/blogs/publicsector/satellite-mission-operations-using-artificial-intelligence-on-aws/)
[^outposts]:[Transforming mHealth applications in Asia Pacific Japan using AWS Outposts](https://aws.amazon.com/blogs/industries/transforming-mhealth-applications-in-asia-pacific-japan-using-aws-outposts/)
[^fab]:[Fab And Field Data Transforming Manufacturing Processes](https://semiengineering.com/fab-and-field-data-transforming-manufacturing-processes/)

### 🏗️ Use Cases

By overcoming extreme conditions and environmental challenges, telemetry solutions are being deployed in increasingly creative ways.

- Maintaining communication and data integrity in the vacuum and radiation of space [^moog]
- Real-time telemetry monitoring of equipment and environmental conditions in industrial operations, utilities, and SCADA [^esri]
- Intelligent traffic and transportation management across various modes [^dot] [^dot2]
- Tracking animal movements and environmental conditions in remote habitats [^animals]

[^moog]:[Moog Debuts New Radiation-Hardened Space Computer](https://www.satellitetoday.com/technology/2024/07/11/moog-debuts-new-radiation-hardened-space-computer/)
[^dot]:[US Department of Transportation](https://www.arc-it.net/html/archuse/planning.html)
[^dot2]:[The Intelligent Transportations Systems Joint Program Office (ITS JPO)](https://www.its.dot.gov/about/its_jpo.htm)
[^esri]:[Modernization of Utilities and the Supporting Role of GIS](https://www.esri.com/arcgis-blog/products/utility-network/electric-gas/modernization-of-utilities/)
[^animals]:[Austin Peay State University joins global wildlife tracking network with new telemetry station](https://clarksvillenow.com/local/austin-peay-state-university-joins-global-wildlife-tracking-network-with-new-telemetry-station/)

### 📐 Standards

Establishing and adhering to standards ensures the reliability and interoperability of telemetry systems. As a reminder, past editions of this newsletter touched upon a few examples.

- [Make IIoT Easy On Yourself](/archive/make-iiot-easy-on-yourself/)
- [Precision Time Protocol That You Love](/archive/precision-time-protocol-that-you-love/)

Additionally, Message Queuing Telemetry Transport (MQTT) [^mqtt] and the recent version 5.0 updates [^v5] are moving the industry forward. What's also exciting is where crossovers, interlocks, and convergence occur within [OTel](/topics/otel) on a path from cloud native to edge native design.

[^mqtt]:[OASIS Message Queuing Telemetry Transport (MQTT)](https://groups.oasis-open.org/communities/tc-community-home2?CommunityKey=99c86e3a-593c-4448-b7c5-018dc7d3f2f6)
[^v5]:[MQTT version 5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)

### 🗣️ Analysis

![Probe Bono](/assets/images/screenshots/2024-08-25-16-09-58.png)

To recall a common science fiction trope, the scenes where a party of explorers decides to "send a probe" will often end with the destruction of the probe just before sending back enough data to capture attention before it disappears. However, modern telemetry has to be robust, continuous, and consistent for us to realize our science fiction future as a reality.

The Internet of Things ([IoT](/topics/iot)) isn't just for our immediate personal networks and personal devices but it does open our imaginations to other use cases. As humanity gains wider understanding of the need for telemetry in harsh and extreme environments on our planet and beyond, we will accelerate the development and deployment of effective telemetry systems to better understand the industrial and natural world around us as well as the vastness of space.

### 🗓️ Events

Earlier this year, the European Test & Telemetry Conference (ETTC) 2024 [^ettc] took place in Germany.

Later this year, the International Telemetry Conference (ITC) 2024 [^itc] takes place in the United States.

[^ettc]:[European Test & Telemetry Conference (ETTC)](https://www.telemetry-europe.org/)
[^itc]:[International Telemetry Conference (ITC)](https://telemetry.org/)

> At just under 1200 words, that's all this week. 🤓

## Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).
