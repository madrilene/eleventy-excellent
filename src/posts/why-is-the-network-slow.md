---
title: "Why Is The Network Slow?"
description: 'A look at low latency networks as defined in the early 2020s'
date: 2023-12-10
---

*Note: This post will draw heavily upon [Techmeme](https://www.techmeme.com) for links. I'm experimenting with the use of [unfurl](https://github.com/daviddarnes/eleventy-plugin-unfurl) for markdown links to provide a summary card automatically.*

What happens when a request for comments ([RFC](https://en.wikipedia.org/wiki/Request_for_Comments)) becomes more than commentary?

Sometimes, the way we think of the state of modern user experiences online can and does change.

When you think of *latency*, the word latency might be abstract or difficult to define. If so, it can be helpful to remember that 30 years ago, our modern web browsing experience was referred to by a different expansion of the acronym "WWW". 

Back then, there was no 3G, 4G, LTE, or 5G — it was an era of twisted pairs of copper wire then referred to as *land lines* or telephone lines which were used for dialup modems to reach an Internet Service Provider (ISP). Most homes only had a single phone line, so when you wanted to talk to someone you stood next to a wall and a corded telephone connected you to the world or you'd fight over the line when someone connected the modem instead. 

Being online in the mid to late 1990s was a time when the World Wide Web was more commonly referred to as the World Wide *Wait*.

Eventually, digital subscriber loop (DSL) modems and cable modems would make the crackling sounds of dialup become a quaint relic of Internet history as the new era of broadband emerged. However, the specter of latency followed facilities-based broadband and still does in addition to the increasingly mobile cellular network connectivity we now take for granted.

# Getting Informed

When considering latency, think about that Top Gun quote... about feeling a need.

https://www.youtube.com/watch?v=CUpwLhZh66A

Or, think back to [Little's Law](https://en.wikipedia.org/wiki/Little%27s_law).

As technology is the response to a perceived need, there is a need to decrease latency. Companies such as Apple, Google, Comcast, NVIDIA, and others would agree.

https://www.techmeme.com/231209/p10#a231209p10

<iframe src="https://cuthrell.com/@jay/111553083189338499/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://cuthrell.com/embed.js" async="async"></script>

We're now entering the world of Low Latency, Low Loss, and Scalable Throughput (L4S).

But why?

#### Why is there a need to decrease latency?

Latency does not always mean you can simply "blame the network" — there is more to understanding latency which requires a fuller user experience (UX).

The study of UX can provide insights beyond the network.

https://www.techmeme.com/181126/p6#a181126p6

Anticipating a user need can be an important consideration or part of delivering a great UX. ~15 years ago, what is now the most popular web browser, Google Chrome, made specific decisions around how to anticipate the UX impact of looking up a website and the perception of latency.

https://www.techmeme.com/080918/p24#a080918p24
https://www.techmeme.com/091112/p53#a091112p53

Back then, iPhone use was on the rise as were 3G, emerging LTE standards, and other competing mobile broadband standards. At the same time, an increasing everyday use of these new technologies and services was becoming a source of nuisance for consumers and the UX experience was, to be charitable, very inconsistent.

https://www.techmeme.com/091029/p57#a091029p57
https://www.techmeme.com/090918/p5#a090918p5
https://www.techmeme.com/091207/p64#a091207p64

Around this time, independent analysis reached the growing mobile broadband market. One group, [Opensignal](https://opensignal.com), would go on to become a regular part of news coverage where latency and the UX for consumers needed a quantified source with a vetted methodology.

#### Where else is latency a concern?

If perception is reality, the reality of latency was not limited to Internet connectivity and the Web. Around the same time, latency was also becoming a concern for online juggernauts for the latest technology darling / buzzword of the times — **the cloud**.

https://www.techmeme.com/100115/p4#a100115p4
https://www.techmeme.com/100629/p50#a100629p50
https://www.techmeme.com/101105/p56#a101105p56

#### Does extra security add latency?

In these modern times, we might take a secure website showing the SSL lock for granted. In modern web browsers, we see warnings now when SSL is not present.

However, that wasn't the case just over a decade ago. As SSL became more prevalent, the implementation of SSL also made the web and applications seem slower... again, the latency reared its head and the industry responded in kind on multiple fronts.

https://www.techmeme.com/110520/p3#a110520p3
https://www.techmeme.com/120320/p68#a120320p68
https://www.techmeme.com/121115/p8#a121115p8
https://www.techmeme.com/130228/p63#a130228p63
https://www.techmeme.com/130327/p44#a130327p44

#### 10 years of latency focused progress...

One of my favorite memories at SxSW over a decade ago was a blogger lounge moment where gaming rigs with big screens and controllers were sitting on the table tops... but the consoles were not doing the computing. In this demo environment, the bloggers were playing games on computing resources *several miles away in a datacenter* and this proof of concept would increasingly become part of the "streaming" and "on demand" nature of entertainment over the network.

https://www.techmeme.com/131018/p22#a131018p22
https://www.techmeme.com/181112/p7#a181112p7

The emergence of companies like [Akamai](https://akamai.com) and other content delivery networks arguably inspired the founding of [Cloudflare](https://cloudflare.com).

https://www.techmeme.com/190312/p3#a190312p3

Experimentation in so-called cloud gaming was ongoing.

https://www.techmeme.com/190319/p36#a190319p36
https://www.techmeme.com/191005/p7#a191005p7

Around this time, even AWS elected to move the cloud closer to the users by exploring massive datacenters being built closer to major population centers. Today, AWS Local continues expanding as have the investments that anticipate the latency requirements for applications that 5G has marketed over the years and Microsoft Azure was not far behind with their Azure Edge Zones.

https://www.techmeme.com/191203/p29#a191203p29
https://www.techmeme.com/200331/p21#a200331p21

When COVID-19 resulted in knowledge workers heading to somewhere other than the office, the meme of latency was front and center for video conferencing. Companies like Zoom Communications, Twitch, and eSports gaming companies had to respond in ways that were increasingly localized.

https://www.techmeme.com/200316/p20#a200316p20
https://www.techmeme.com/200629/p1#a200629p1
https://www.techmeme.com/200701/p3#a200701p3
https://www.techmeme.com/200901/p42#a200901p42
https://www.techmeme.com/210831/p47#a210831p47
https://www.techmeme.com/211021/p44#a211021p44

In a post COVID-19 world, the investments in companies and technologies to address latency continued both terrestrially and extraterrestrially continues. Or, to think of it another way, latency is a shifting window of UX expectations. 

https://www.techmeme.com/220328/p12#a220328p12
https://www.techmeme.com/221019/p24#a221019p24
https://www.techmeme.com/230119/p18#a230119p18
https://www.techmeme.com/230604/p2#a230604p2

The implications of latency and the architectural considerations for applications with larger user communities appeared in the news cycle this year. If one cloud latency is a concern, then hybrid multi-cloud latency will become the next concern.

https://www.techmeme.com/230613/p36#a230613p36

And, as a final note, the cloud continues to be a concept that latency is linked to. As such, the cloud in a can at the edge of the network is perhaps the closest and most low latency cloud of all. Oxide now joins the world of [Azure Stack](https://azure.microsoft.com/en-us/products/azure-stack), [Google Anthos](https://cloud.google.com/anthos), and [AWS Outposts](https://aws.amazon.com/outposts/).

https://www.techmeme.com/231026/p21#a231026p21

So, what will be the next big thing in addressing the perception of latency computing and UX?

Until then… Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).
