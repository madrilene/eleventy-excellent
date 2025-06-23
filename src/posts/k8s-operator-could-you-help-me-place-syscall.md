---
title: "k8s Operator, Could You Help Me Place SysCall?"
description: ''
date: 2023-02-13 01:29:11.592900+00:00
---

This week we look at Custom Seccomp Profiles (CSP) and Security Profiles Operator (SPO), and future WebAssembly (Wasm) Operators.

Music: [Jim Croce - "Operator" (1972)](https://www.youtube.com/watch?v=Bb85NvjbBm8)

\_Note: This edition of the newsletter is exploring some of the newest features from Buttondown for oEmbed. Love it? Hate it? If you prefer footnotes and hyperlinks over rich media inclusions or image click through inclusions, your feedback would be appreciated.\_

# Getting Informed

This newsletter and my blog have described the progression of application deployment options from operating systems installed on bare metal servers to hypervisors allowing virtual machines to the emergence and growing adoption of containers for cloud-native apps. 

Along the way there are corresponding progressions in how security and observability are implemented in each of these deployment options — including the growth in use of Operators covered in our last issue.

https://fudge.org/archive/smooth-k8s-operator/

If you consider the growth of containerized environments and squint hard, you'll appreciate the sage security and observability wisdom from the cult classic movie Airplane:

\_"Striker, listen, and you listen close: flying a plane is no different than riding a bicycle, just a lot harder to put baseball cards in the spokes."\_ -- Rex Kramer

## Isn't that the way they say it goes? 🎶

Joking side, does an observability security goal within containerized environments lend itself to this comedic analogy of attempting to put baseball cards into the blades of a modern jet engine?

First, imagine a way to protect an application by restricting specific actions that can be taken within a container. Now, behold the brave new world of Seccomp Profiles from [Sascha Grunert](https://www.linkedin.com/in/sascha-grunert/):

https://www.youtube.com/watch?v=alx38YdvvzA

Next, imagine the ability to be on the lookout for gnarly system calls (syscalls) attempting a means to escalate privilege for the operating system. Now, consider the practical application of the seccomp notifier — once again — from [Sascha Grunert](https://www.linkedin.com/in/sascha-grunert/).

https://kubernetes.io/blog/2022/12/02/seccomp-notifier/

## You can keep the dime 🎶

Now, while this adversarial concern might sound extravagant or exotic, sadly it isn't — so, to connect those dots, this newsletter will feature a ["Swing Out Sister"](https://www.youtube.com/watch?v=IIOJdMdS56k) security equivalent to Rickroll related issue in the future. Until then, to learn more about k8s Security Profiles Operator, you can visit the GitHub repository:

https://github.com/kubernetes-sigs/security-profiles-operator

Once there, you can also review the SPO Roadmap:

[![Screenshot 2023-02-11 at 7.55.55 PM.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/62f9bdb1-8cce-4d18-a5a8-449b4580a0f4.png)](https://github.com/kubernetes-sigs/security-profiles-operator)

Next, to get a feel for how these design choices came together and how the roadmap may evolve, you can look into the Slack community for k8s:
[#security-profiles-operator](https://kubernetes.slack.com/archives/C013FQNB0A2)

Indeed, you can find the timeline over the past few years for including gRPC API and familiar contributors.

![Screenshot 2023-02-12 at 12.11.21 PM.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/90a72b24-c173-4d4a-ae61-dff3c4dc1aa2.png)

https://github.com/kubernetes-sigs/security-profiles-operator/pull/469

https://github.com/kubernetes-sigs/security-profiles-operator/pull/140

Now, let's connect the dots. Last year, this newsletter covered WebAssembly (Wasm).

https://fudge.org/archive/cadillac-webassembly-line/

And...

Free and Open source Software Developers' European Meeting (FOSDEM) 2023 content is appearing online now. This means you can learn about memory and resource hungry k8s hippos and the possibilities of Wasm Operators from [Merlijn Sebrechts](https://www.linkedin.com/in/merlijn-sebrechts):

https://fosdem.org/2023/schedule/event/container\_kubernetes\_operators\_wasm/

https://www.youtube.com/watch?v=E5o81Wldshk

So, what will be the next big thing in k8s Operators, security, observability, and automation? 

Until then… Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

[^Bryan Truong]: Shout out to [Bryan Truong](https://www.linkedin.com/feed/update/urn:li:activity:6930188455708688384/)


