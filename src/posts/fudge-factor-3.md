---
title: "Fudge Factor: Calibration and Validation"
description: 'Edition 3 of my new newsletter on our increasingly connected world'
date: 2024-08-18
---
This is Edition 3 of my [newest](/archive/fudge-factor) newsletter on our [increasingly connected](/archive/increasingly-connected) world.

### 🔮 The Art and Science of Calibration and Validation

Precision and accuracy in remote sensing [^nasa] data from satellites is not guaranteed to be consistent without significant work before, during, and after systems are operational. Or, as the saying goes "things can and will change".

[^nasa]:[NASA Tutorial: What is remote sensing?](https://www.earthdata.nasa.gov/learn/backgrounders/remote-sensing)

Calibration and validation (or cal/val[^earthdata] for short) anticipate changes that are crucial for transforming remote sensing raw data into accurate, actionable information. In many instances, calibration coefficients or "fudge factors," account for environmental factors such as radiation impact, instrument limitations, mechanical stresses, and other atmospheric conditions.

[^earthdata]:[NASA's EarthData](https://www.earthdata.nasa.gov/technology/calibration-and-validation)

Such adjustments are commonly required in satellite systems to enable consistent reliability in applications from climate monitoring to precision agriculture. For example, even with the most sophisticated Landsat satellites, there are still requirements for continuous calibration [^landsat] and validation of sensors and the data they capture.

[^landsat]:[Landsat Satellites](https://www.usgs.gov/landsat-missions/landsat-calibration-validation)

Specific to radiometric accuracy, getting repeatability in measurements can include many "fudge factors" during the radiometric measurement itself. Accuracy comes from anticipating [^jacie] what (thing, object, place) is being measured, the surface morphology(ies) of what is being measured, the environment(s) of what is being measured, atmosphere(s) of what is being measured, and the instrumentation itself used for the measurement.

For example, the European Space Agency improved the radiometric accuracy of Sentinel satellites [^sentinel] using a combination of onboard devices and ground-based targets. The field continues to evolve, incorporating machine learning [^ibm] and novel reference standards to meet the demands of our data-driven world.

> Sentinel-5P has radiometric accuracy of 1.6% in Short-wave infrared (SWIR) to 19% in Ultraviolet (UV) light of the measured Earth spectral reflectance.

Source: [Copernicus: Sentinel-5P Performance Specifications](https://www.eoportal.org/satellite-missions/copernicus-sentinel-5p#performance-specifications)

[^sentinel]:[Sentinel Wiki](https://sentiwiki.copernicus.eu/web/sentinel-5p)
[^ibm]:[NASA and IBM Research Prithvi-weather-climate Foundation Model](https://www.earthdata.nasa.gov/learn/blog/nasa-ibm-weather-climate-foundation-model)
[^jacie]:[Joint Agency Commercial Imagery Evaluation (JACIE) Best Practices for Remote Sensing System Evaluation and Reporting](https://pubs.usgs.gov/publication/ofr20241023/full)

### 📰 News

Sensors will continue to appear in more places around us and above us as well. As such, the challenges for [cal/val](/topics/cal-val) will require innovative workarounds.

For example, one interesting "fudge factor" to consider is a measure of awareness for other satellites in various low Earth orbit (LEO) locations. In effect, this would allow sensors in LEO to know about other satellites with sensors in LEO... by adding more sensors [^scout] as part of an observation network in space to see those sensors already in space and those arriving at a quickening pace.

Or, if you are into memes...

[^scout]:[Scout Space](https://www.scout.space/post/scout-space-sparrow-successfully-captures-first-in-space-image)

![yo dawg](/assets/images/screenshots/2024-08-18-14-58-42.png)

Recent headlines spanning a variety of use cases:

- [Keysight Technologies Launches Phased Array Calibration Solution](https://www.satellitetoday.com/technology/2023/10/04/keysight-technologies-launches-phased-array-calibration-solution/)
- [Saint Louis University Receives $1 Million NGA Grant to Establish Midwestern Satellite Calibration Network](https://www.slu.edu/news/2023/september/tgi-nga-grant.php)
- [Showdown at Railroad Valley over satellite calibration](https://washingtonmonthly.com/2024/01/16/showdown-at-railroad-valley/)
- [Global Space-Based Inter-Calibration System annual meeting](https://www.eumetsat.int/global-space-based-inter-calibration-system-annual-meeting)

### 🤖 Technology

AI/ML is being leveraged to automate and optimize [cal/val](/topics/cal-val) processes. By applying AI/ML, data benefits from reductions in human-borne errors and results in processes that are vastly more efficient. [^aiml] [^ntrs]

[^aiml]:[AI model harnesses physics to autocorrect remote sensing data](https://phys.org/news/2024-07-ai-harnesses-physics-autocorrect-remote.html)
[^ntrs]:[Using AI/ML to Address Satellite Cloud Remote Sensing Challenges](https://ntrs.nasa.gov/citations/20230003379)

As edge computing on-board processing capabilities become more powerful [^cognisat], it allows for real-time [cal/val](/topics/cal-val) adjustments. Flying to space to make adjustments is costly and so is having to service potentially millions of sensor systems in terrestrial settings, so enhancing the accuracy of data collected by drones and other mobile sensing platforms benefits with each cycle of compute modernization.

[^cognisat]:[Ubotica CogniSAT-XE1 On-Board AI Payload Coprocessor PC/104](https://ubotica.com/ubotica-cognisat-xe1/)

Cryptocurrency references aside, distributed ledger technology is also being explored as a means to ensure the integrity and traceability of [cal/val](/topics/cal-val) data throughout the remote sensing supply chain. Or, in simpler highway travel terms, you rarely think about Radar Calibration Records until you get a speeding ticket — and you might not get those records at all.

### 🏗️ Use Cases

A major use case is self-referential. Reducing uncertainty by going back to the Earth's moon with an agenda [^eumetsat] of more accuracy in monitoring would be an ideal vantage for ongoing [cal/val](/topics/cal-val) enhancements.

Humanity benefits from precision agriculture [^ag] via better multispectral imagery that enables farmers to optimize crop management practices. In our cities, we can benefit from better urban planning, design, and development decisions that are possible with better data. Also, as one species of many on this planet, better satellite data provides insights into long-term climate trends that help support evidence-based policy decisions.

> Side note: Yes, there is a clear unambiguous military use case [^military] for having better access to precision and accuracy through rapid calibration and validation, both in offensive and defensive postures. However, my goal with this blog and newsletter is not to focus on military use cases where plenty of other blogs and newsletters do a fine job already.

[^military]:[Lockheed Martin Technology Demonstration To Showcase Faster On-Orbit Sensor Calibration](https://news.lockheedmartin.com/ESA_payload_demonstrator)

[^eumetsat]:[Aiming for the Moon - to accurately monitor the Earth](https://www.eumetsat.int/aiming-moon-accurately-monitor-earth)

[^ag]:[UAV-based canopy monitoring: calibration of a multispectral sensor for green area index and nitrogen uptake across several crops](https://link.springer.com/article/10.1007/s11119-024-10123-2)

### 📐 Standards

Again, let's start with a quote attributed to either Admiral Grace Hopper or Professor Andrew Tanenbaum:

> "The nice thing about standards is that you have so many to choose from"

- Committee on Earth Observation Satellites (CEOS) [^ceos]
- The International Organization for Standardization (ISO) [^iso]
- National Institute of Standards and Technology (NIST) [^nist]

[^ceos]:[CEOS Meetings](https://ceos.org/meetings/)
[^iso]:[ISO Projects](https://committee.iso.org/sites/tc211/home/projects/projects---complete-list/iso-19124-1.html)
[^nist]:[NIST Services](https://www.nist.gov/services-and-standards)

### 🗣️ Analysis

If you have heard of [digital twins](/topics/digital-twins), then consider why getting [cal/val](/topics/cal-val) right is so crucial for the data that informs simulations and modeling. From the increasingly low-cost sensors around us to the billions spent on sensors above us, the precision and accuracy of data matter.

Increasingly, data will drive decisions and the mastery of data within a high-fidelity data platform in business, government, and a well-informed local population of our planet. Also, perhaps if we get these "fudge factors" down to a science — that explains and predicts — one day our future fellow humans on the Moon, Mars, and points beyond will benefit from it as well.

### 🗓️ Events

You might have missed the International Geoscience and Remote Sensing Symposium (IGARSS) that took place in July 2024 [^IGARSS] which featured **133 community sessions** in addition to an already packed agenda! Perhaps plan for next year at IGARSS 2025! 🤓

[^IGARSS]:[IGARSS 2024](https://www.2024.ieeeigarss.org/community_contributed_sessions.php)

So, if you are interested in the approximately 30 conferences where [cal/val](/topics/cal-val) topics will come up, check out this [list of all major conferences, workshops and events related to remote sensing](https://airtable.com/appf0nsT6QiuMERwZ/shrqXXMDHSJRan7Qx/tblIkyUmR6LTvrUWJ?viewControls=on). Thanks to [Aravind Ravichandran](https://www.linkedin.com/in/aravindravichandran/) at [Terrawatch](https://terrawatchspace.com) for compiling such a great resource!

> At just under 1300 words, that's all this week. 🤓

## Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).