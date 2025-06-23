---
title: "Proxy Tear Us Apart"
description: 'A look at the path from VPN to Beyondcorp-esque alternatives'
date: 2022-12-11 15:10:50.325363+00:00
---

Music: \*[INXS - Never Tear Us Apart (1988)](https://www.youtube.com/watch?v=AIBv2GEnXlc)\*

This week we look at the path from VPN[^0] to Beyondcorp-esque alternatives

# Sidebar

 ![73xh8k.jpg](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/511ca7e1-bc6d-48dc-a275-a9a3bd802b21.jpg) 

A few readers have asked why I've left Substack. That's a fair question.[^1] 

First, I think Substack is becoming the destination service of choice for long form writers in 2-3 years — but as I explored the service it was not maturing as a platform to fit my needs as someone that likes to tinker. Further, I expect Substack is going to capture a portion of Medium's marketshare and is likely be where other web blog / email newsletter properties evacuate to as a long form destination and [I tried Medium too](https://medium.com/@jaycuthrell). 

My reasons for moving away from Substack are due to my desire to have access to a public API and more design choices on my own terms as an aspirational developer / writer. Or, said simply, I am more interested in using [a platform with an API](https://buttondown.email/features/api) than a [walled garden destination](https://support.substack.com/hc/en-us/articles/360038433912).

While my collection of content isn't much, it does stretch back to 1998.[^2] So, my use cases are a bit different than Substack which has recently exapanded to [checks notes..] \*Chat\* aka mobile app only commentary.🤔

Some Fudge Sunday readers might recall I was on Revue (Twitter) before. Substack was a response to what I sensed (and since confirmed) as the question of Revue long term viability with ever changing directions within product management at Twitter. 

After a decade, Twitter [diminished in value for me in 2017](https://fudge.org/archive/on-twitter/). I looked at many alternatives. Mailtrain, TinyLetter, Ghost, etc... etc... but Substack was on the list because it was quick and seemed interesting enough to try out in 2022. 

In fact, I had signed up for Buttondown back in 2019 but stuck it out with Revue. However, I didn't consider Buttondown before my move to Substack in 2022 and immediately had regrets — no \*shade\* intended to Substack.[^3] 

Today, Buttondown appeals to my developer / writer needs (more like aspirations but... soon!) and was referenced by others I trust for such recommendations. So, it's likely I'll be on Buttondown until I can find a suitable alternative that I can self-host.

# Getting Informed

As I mentioned early last month, the requirement for a VPN is arguably at odds with [zero trust principals](https://fudge.org/archive/a-matter-of-zero-trust) use of proxies. So, one story that captured my attention in the recent deluge of [commentary](https://aws.amazon.com/blogs/aws/aws-verified-access-preview-vpn-less-secure-network-access-to-corporate-applications/) surrounding AWS re:Invent 2022 was the (Preview) release of [AWS Verified Access](https://aws.amazon.com/verified-access/features/).

When a cloud service provider the size of AWS enables access to a VPN alternative, it's time to take notice. It's also worth considering the impact to future software application design choices and basic assumptions in how operations will change for those applications.

## What you know is true 🎶

If you are an IT practitioner, think back to the challenges of a traditional VPN deployment from coordination to distribution to lifecycle from two decades ago ago. Now, consider when your normal day to day references to \*KVM\* went from \*"Keyboard, Video, Mouse"\* transitioned to \*"Kernel-based Virtual Machine"\* and you'll see that progress is coming for your acronyms too.

Seeing AWS fast follow Google is interesting. Knowing Azure is likely to follow potentially moves the progression from general VPN to pandemic traffic demands for VPN with [split tunneling](https://www.microsoft.com/insidetrack/blog/running-on-vpn-how-microsoft-is-keeping-its-remote-workforce-connected/) to [zero trust](https://www.microsoft.com/insidetrack/blog/verifying-device-health-at-microsoft-with-zero-trust/) as well — for hybrid cloud and multicloud use cases.

## But some of us don't know why 🎶

Now, do I think the VPN market will suddenly become irrelevant? No, of course not.



I do however think that when all of the major cloud service providers push further into a Beyondcorp-esque offering, it will have implications for pushing VPN into more niche use cases. And secure access progression is inevitable. 

Increasingly, infrastructure as code (IaC) such as [Terraform](https://www.strongdm.com/blog/terraform-your-devops-workflow), [Ansible](https://goteleport.com/docs/machine-id/guides/ansible/), [Pulumi](https://www.twingate.com/docs/pulumi-getting-started/), etc. will enable incremental approaches to a zero trust design as an initialization level snippet. As such, the entire access proxy market will be fascinating over the next few years as players and projects blend VPN simplification, Beyondcorp-esque inspired design choices, and ever more accessible solutions to effortless "zero touch" deployment.

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

[^0]: Virtual Private Network or Vexing Productivity Neutralizer?
[^1]: Hey, what can I say... I'm both finicky and fickle when it comes to platform commitment.
[^2]: Flat files to WYSIWYG stuffed MySQL and back again to markdown then TypeScript then...
[^3]: I expect that I'll have a Substack account just as I do for Medium (which I joined in 2012).