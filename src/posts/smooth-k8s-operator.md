---
title: "Smooth k8s Operator"
description: ''
date: 2023-02-05 19:46:42.665000+00:00
---

![Screenshot 2023-02-05 at 12.53.13 PM.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/aceb8878-d34f-4080-8992-cf0ba81fc755.png) 

Source: [chat.openai.com](https://chat.openai.com)

Music: [Sade - Smooth Operator (1984)](https://www.youtube.com/watch?v=4TYv2PhG89A)

This week we take a look at growing interest in Kubernetes (k8s) Operators.

The header image is probably stretching the limits of musical analogies through a tortured use of ChatGPT but here we are. Actually, the analogy of a conductor isn't that bad as long as we assume that one conductor isn't traveling around for other orchestras unless they play a very specific piece from a very specific composer.

So, now that the k8s Operators concept is turning seven (7!) years old [^1], it is reasonable to ask \_why\_ Operators came into existence. Also, how did we get to a point where \_Operator\_ was a k8s related term and important enough to be of growing interest now?

# Getting Informed

First, there is a [canonical definition of Operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) that should be referred to even if there are many (many!) vendors that will embrace and extend the definition. Indeed, the placement of the Operators definition in the "Extending" section of k8s documentation is important to keep in mind.

[![Screenshot 2023-02-05 at 1.41.01 PM.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/76dd61d5-0ace-4069-9136-10d82d90beb2.png)](https://trends.google.com/trends/explore?date=2016-11-16%202023-02-05&q=kubernetes%20%2B%20operators#TIMESERIES)

Second, growth in both the interest and arguably the adoption of k8s Operators is a key indicator of increasing use of k8s in general. Extending the use cases for k8s means growing numbers of applications that are being considered for inclusion in what were classically human intensive aspects of application deployment / lifecycle / care / feeding that now are seen as desirable automation opportunities -- as Operators.

## Moves in space with minimum waste and maximum joy 🎶

Sometimes there are applications that might be best described as a skit from [Abbott and Costello](https://www.youtube.com/watch?v=kTcRRaXV-fg). Yes, you need to know the names of the applications just like you need to know the names of the players -- and if you don't have operational knowledge about what those players need, things can get very confusing very fast. 🤔

k8s Operators are a means to extract and apply the critical (and very much customized) knowledge required to adequately accomplish common tasks associated with those applications on the playing field. If order and lifecycle matters for these kinds of applications, you'll appreciate and use [Operators](https://www.cncf.io/wp-content/uploads/2021/07/CNCF\_Operator\_WhitePaper.pdf).

- Need to bring in a relief pitcher application? [Check](https://www.cncf.io/blog/2022/06/15/kubernetes-operators-what-are-they-some-examples/). ⚾️
- Need to know and get what application goes on First, Second, Short Stop, Third, Catcher — and the glove types - and get them off the field at the end of a costly inning? [Check](https://aws-controllers-k8s.github.io/community/). ⚾️
- Need to know if and ensure this application needs / gets backed up in the 7th inning? [Check](https://operatorhub.io/operator/mariadb-operator-app). ⚾️
- Need to ensure a team statistician is automatically watching the batting lineup to inform the manager the next batting order choice for applications? [Check](https://operatorhub.io/operator/prometheus-exporter-operator). ⚾️

## No place for beginners or sensitive hearts 🎶

As there are many applications that are stateful, the customizations are many as well. Therefore, the reading for k8s Operators can be a rabbit hole of deeper and deeper customizations, ideally, leading to the use of [Operator focused software development kits](https://sdk.operatorframework.io/build/). 

As of this issue of the newsletter, there are [+1000 GitHub repositories](https://github.com/search?o=desc&q=%22kubernetes+operator%22&s=stars&type=Repositories) with references to k8s Operators. Many of these GitHub repositories already have +1k stars.

One topic to keep an eye on is [Operator Framework](https://github.com/topics/operator-framework). As of this issue of the newsletter, there are 54 public repositories tagged with the [Operator Framework](https://github.com/topics/operator-framework) as compared to 556 public repositories tagged with [Kubernetes Operator](https://github.com/topics/kubernetes-operator). 📈

So, what will be the next big thing in k8s Operators? 

Until then… Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

[^1]: [Introducing Operators: Putting Operational Knowledge into Software (2016)](https://cloud.redhat.com/blog/introducing-operators-putting-operational-knowledge-into-software)
[^BradTopol]: Shout out to [Brad Topol](https://www.linkedin.com/in/brad-topol-6273536/)

