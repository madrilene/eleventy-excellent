---
title: "Buf.build Your REST"
description: 'A a look at the history of protocol buffers as well as the rise of buf'
date: 2023-03-06 02:10:56.785300+00:00
---

 

Music: [Earth, Wind & Fire - Build Your Nest (1973)](https://www.youtube.com/watch?v=T1w3nM8HrSg)

This week we take a look at the history of protocol buffers as well as the rise of buf cli and Buf Technologies.

# Getting Informed

Just over two decades have passed since the creation of [protocol buffers](https://github.com/orgs/protocolbuffers/repositories) at Google.[^1] For context, within a modern software application stack, we can apply an \_\_\_emphasis\_\_\_ on parts to examine more closely that benefit from the use of protocol buffers.

- Device / User Experiences
- \_\_\_Apps\_\_\_
- \_\_\_Data\_\_\_
- Runtimes
- Middleware
- Operating Systems
- IaaS Ecosystems (aka the cloud service providers; VMs on top of basic compute, storage, and networking; and/or bare metal plus network services)
- Notional Data Centers (edge to core to cloud connected by telecom) 

With protocol buffers (also referred to as protobuf), the goal is serializing structured \_\_\_Data\_\_\_ for use in \_\_\_Apps\_\_\_ for any programming language and with a path towards extensibility via schemas. So, if this sounds like something slightly more appealing than keeping track of JSON and versioning of a REpresentational State Transfer (REST) APIs, let's keep going.

## Vibes ain't good, hey, gotcha' feelin' sad 🎶

[Buf Technologies](https://buf.build) has had submissions to Hacker News[^2] since as far back as 2019. However, I only noticed Buf Technologies years later in the deep web communities where software architects, developers, and k8s type folks would hang out or lament the challenges of [change management with protocol buffers](https://buf.build/product/bsr/) as well as [gRPC](https://buf.build/blog/connect-a-better-grpc) in general.

Fast forwarding to today, [buf cli](https://github.com/bufbuild/buf/) is democratizing access to schema-driven development for a far wider audience of developers. Toolchains that include buf are ushering in a new assumption on [developer productivity in areas where RESTful APIs are arguably declining and becoming an increasingly cumbersome process](https://buf.build/blog/api-design-is-stuck-in-the-past/).

If you are wondering how protocol buffers fit into gRPC, you might recall [prior gRPC discussion in Fudge Sunday](https://fudge.org/archive/k8s-operator-could-you-help-me-place-syscall/). Also, the Buf Technologies story on [connect and grpc-web](https://buf.build/blog/connect-web-protobuf-grpc-in-the-browser) is very interesting. 

Do you have 25 minutes? [Dimitri Mitropoulos](https://github.com/dimitropoulos) of Buf Technologies gave a great presentation on [protocol buffers and gRPC at JSWORLD](https://www.youtube.com/watch?v=xTb2\_8ZLlSc).

https://www.youtube.com/watch?v=xTb2\_8ZLlSc

There is much to unpack in this talk, but the things that matter are the things that are going to be increasingly accessible to wider developer communities. For example, a deep dive into [GraphQL](https://graphql.org) will be in a future issue of Fudge Sunday.

## Now things around you can't do you no harm 🎶

So why does Buf Technologies exist?

> \_"Buf's mission is to deprecate REST/JSON and move the industry towards a future of schema driven development with Protobuf."\_ Source: [Lux Capital](https://www.luxcapital.com/companies/buf)

The succinct quote above is found on a Buf Technologies investor website. While researching this issue of Fudge Sunday, I learned [Buf Technologies had already taken an impressive amount of VC funding](https://www.theglobeandmail.com/business/article-toronto-startup-buf-technologies-raises-more-than-100-million-with-18/).

Fudge Sunday readers might recall [Sourcegraph coverage last year](https://fudge.org/archive/fudge-sunday-needle-in-a-fullstack). Looking back, it was interesting to learn that the [VP of Engineering at Buf came from Sourcegraph](https://www.linkedin.com/in/nickdsnyder/).

So, what will be the next big thing in making protocol buffers, gRPC, and APIs easier and more accessible to a wider developer community? 

Until then… Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

[^1]: [History: Protocol Buffers Documentation ](https://protobuf.dev/history/)
[^2]: [Hacker News: buf.build](https://news.ycombinator.com/from?site=buf.build) 
🤓