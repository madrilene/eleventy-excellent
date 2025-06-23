---
title: "Events and Efficiency"
description: "A look at what's next in events and efficiency in runtimes"
date: 2024-04-28
---

This week we take a look at what's next in events and efficiency in runtimes.

## Housekeeping

- If you want to [catch up](https://cuthrell.consulting/services/) in the real world, I have news to share. I'm heading out on the road in 2024 and these are just a sample of the [confirmed events](https://cuthrell.consulting/events/) that I'll be [supporting](https://cuthrell.consulting/services/).
  - [Red Hat Summit and AnsibleFest](https://www.redhat.com/en/summit) in Denver from May 6 - 9, 2024 for [Elevate Technology User Group](https://elevateusergroup.com/events)
  - [Dell Technologies World](https://www.dell.com/en-us/dt/events/delltechnologiesworld/2024/index.htm) in Las Vegas from May 21 - 23, 2024 for [Elevate Technology User Group](https://elevateusergroup.com/events)
  - [Qlik Connect](https://www.qlikconnect.com/) in Orlando from Jun 3 - 5, 2024 for [Tech Field Day](https://techfieldday.com/events/)
  - Want to combine forces or see your event listed here?
    - [To discuss our availability during these events, please contact us directly.](https://cuthrell.consulting/contact/)
    - [To request support for your events, please review our services.](https://cuthrell.consulting/services/)

- More content in more places
  - My [Banking on Disruption](https://bankingondisruption.com) podcast with [Fred Cadena](https://www.linkedin.com/in/fredcadena/) is shaping up nicely. 🎙️ 🎧
  - The return of [Unicorn Jockeys](https://unicornjockeys.com) podcast is now assured as the [A.I.](/topics/ai) fever pitch continues. 🦄 🏇 🎙️ 🎧

Now, back to our regularly scheduled Fudge Sunday newsletter! 🤓

## Getting Informed

_Runtime_ and _runtimes_ have [many computing definitions](https://en.wikipedia.org/wiki/Runtime). However, a C-suite simple way to think of a runtime is what amount of time any software application workload takes to run — because time is money.

As many esteemed clouderati have provocatively stated, the cloud is just someone else's computer... and that same someone has the benefit of immensely more resources than most... in addition to a mechanism to surface that computer to be easily accessible, elastically expandable... and while in use... there is absolutely **a meter that is always running**.

So, the argument goes, that runtime optimizations have immense value. You know you'll be chopping wood — but how long it takes to finish the job depends on how sharp the instrument that you'll be renting (public cloud) or the investment to own axe handles (private cloud) and periodically sharpen your ax.

In terms of public clouds, there are several options for runtimes. Generally speaking, serverless and low wait times were early differentiators but that gap has closed and the favoritisms are more likely related to committed spending for a primary cloud service provider and the sharpness of the FinOps pencils in use at an organization.

For example, Azure offers [Fabric](https://learn.microsoft.com/en-us/fabric/data-engineering/runtime) which is based on Apache Spark and has continued to be more integrated across other elements of Azure analytics offerings. GCP offers [serverless Spark](https://cloud.google.com/solutions/spark) and integrates BigQuery, Vertex AI, and DataPlex. OCI offers [Data Flow](https://www.oracle.com/big-data/data-flow/) as a fully managed Apache Spark service.

By comparison (_only to show the timelines involved_), AWS offers Amazon EMR (which was originally named Amazon Elastic MapReduce) and has consistently blogged about improvements to price and performance for workloads like Spark (as well as Hadoop, Hive, Presto, Trino, etc.) and a simple path to consume as the industry has shifted from spinning disks to solid state disks to drastically lower latency in-memory approaches for real-time stream processing or batch processing.

- 2024 https://aws.amazon.com/blogs/big-data/run-trino-queries-2-7-times-faster-with-amazon-emr-6-15-0/
- 2023 https://aws.amazon.com/blogs/big-data/run-apache-spark-workloads-3-5-times-faster-with-amazon-emr-6-9/
- 2021 https://aws.amazon.com/about-aws/whats-new/2021/08/spark-3-1-runtime-aws-glue-3-0/
- 2019 https://aws.amazon.com/about-aws/whats-new/2019/11/announcing-emr-runtime-for-apache-spark/
- 2009 https://aws.amazon.com/blogs/aws/announcing-amazon-elastic-mapreduce/

So, this isn't new... and Apache Spark has been around since 2010. But, the sharpening of axes continues.

### The Axis of Axes

Previously, I [mentioned](https://fudge.org/archive/hanging-out-my-shingle/) going down the rabbit hole on [Velox](https://fudge.org/topics/velox/) and [Comet](https://fudge.org/topics/comet/). It's time to share what I've been taking in and what I've digested so far.

### Velox

Velox has the Meta/Facebook name attached to it. As a C++ library, it enjoys a large potential contributor audience.

- Primary website https://velox-lib.io
  - Sphinx https://facebookincubator.github.io/velox/monthly-updates/january-2024.html
  - Blog https://velox-lib.io/blog
  - Latest Meta/Facebook blog post https://engineering.fb.com/2024/02/20/developer-tools/velox-apache-arrow-15-composable-data-management/
  - Meta/Facebook Blog Cadence (~1 per year) https://engineering.fb.com/?s=velox
- GitHub https://github.com/facebookincubator/velox
- GitHub Stats
  - 3145 stars
  - 109 watchers
  - 1000 forks
  - 269 contributors
  - 93 Pull requests _opened_ by 52 people in the past month https://github.com/facebookincubator/velox/pulse

It wasn't 100% clear in my research even after watching videos from the [VeloxCon agenda](https://web.archive.org/web/20240428221942/https://veloxcon.io/agenda/) on where this project is headed — but it was interesting to see IBM, Meta/Facebook, Pinterest, Intel, and Microsoft presenting.

### Comet

Comet is very new by comparison. As a Rust library, it has a smaller contributor audience for now.

- Primary website https://datafusion.apache.org/comet/
- Mailing list https://lists.apache.org/list.html?dev@datafusion.apache.org
- GitHub https://github.com/apache/datafusion-comet
- GitHub Stats
  - 398 stars
  - 55 watching
  - 85 forks
  - 24 contributors
  - 51 Pull requests _merged_ by 13 people in the past month https://github.com/apache/datafusion-comet/pulse

### Other Axes

Of course, there are still the [ClickHouse](https://clickhouse.com) solutions, the [StarRocks](https://www.starrocks.io) solutions, the [Sneller](https://sneller.ai) solutions, the [Compute AI](https://compute.ai/documentation/compute-ai-product-datasheet/) solutions 🤓 , and what will likely be new players in this space for the foreseeable future. Older axes benefit from grinding.

Of course, I try to be fair in my newsletter as I have no ax to grind.

So... 🤓

What's the probability of an industry-altering technology emerging that will fundamentally change our perceptions of time to value in processing ever more data in a far faster economic way than the years before?

Until then... place your bets.

## Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

***

p.s. As I've gotten older, I have come to appreciate getting snail mail. If you have time to [drop me a postcard](https://jaycuthrell.com/contact), I'm going to be scanning the picture side of the postcards I've received and link to a Fudge Sunday Reader Postcards gallery (with suitable redactions and filtering for greater anonymity) as a newsletter trailer of sorts. Stay tuned! ✉️