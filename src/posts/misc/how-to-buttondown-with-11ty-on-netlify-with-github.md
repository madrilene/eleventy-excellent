---
title: "Buttondown with 11ty on Netlify with GitHub"
description: 'A look at how Fudge Sunday 🤔💡🤯🤓 newsletter gets made each week'
date: 2024-01-21
---

This installment is a look at how Fudge Sunday 🤔💡🤯🤓 newsletter gets made each week.

Every newsletter will have a set of steps to achieve the outcome of readers getting email and accessing an online archive of each new installment. My recipe, or set of steps, is meant to illustrate just one possible approach with minimal effort and the use of automation.

## How to Buttondown

I've been a [happy Buttondown customer](https://buttondown.email/) since 2019. If you are thinking about writing a newsletter, considering the service to use, or are seeking options with an API, [please consider using Buttondown using my referral link](https://buttondown.email/refer/jaycuthrell) *(that's my referral link where I will get a 25% lifetime commission and you get $9 off your first month)*.

### Why Buttondown? Why this recipe?

In a prior life, I ran large email systems in the late 1990s until around 2010. I learned a lot.

The first thing I learned was that email delivery is rarely guaranteed due to the increased emphasis on the reputation scoring of senders. In short, there is a lot of unsolicited commercial bulk email (spam) out there and it can ruin your network neighborhood.

I'm not doing email hosting for a living anymore but... anecdotally, I try to ensure that everything looks good from a Google Workspace Gmail headers point of view. As such, finding a solution like Buttondown means you are working with a sender that has a superb reputation.

Other senders like Mailgun (via Ghost) have a reputation that is almost as good as larger players (i.e. Substack) and that reputation is, in my opinion, light years better than Amazon SES.

After that, it's probably going to be keyword, trigram, and late DCC whitelisting that might set off scoring toward the spam folders of other smaller email providers. Your mileage may vary.

*Side note: One thing I've wondered about is the appetite for decentralized newsletters to be represented within [M3AAWG](https://www.m3aawg.org). But, that's for another installment of this newsletter perhaps.*

### Code Local Commit Global

First, I write the newsletter locally as a blog post using [11ty (Eleventy)](https://www.11ty.dev) based upon an amazingly opinionated starter called [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent) by [Lene Saile](https://www.lenesaile.com/en/). I use Visual Studio Code with a terminal running ```npm start``` as I outlined for my setup in [Zettelkasten End of Year for 2023](/archive/zettelkasten-end-of-year-for-2023/).

![my starting session with Visual Studio Code](/assets/images/screenshots/2024-01-21-18-39-04.png)

### Buttondown settings

Several [configuration options](https://buttondown.email/settings#integrations) enable me to write my blog post as the basis for an email distributed to my subscribers using Buttowndown.

Settings that help me keep things clean in my subscribe list include opt-in confirmations and limiting bots as well as a custom thank you page upon subscribing within Subscriber Flow in Buttondown Settings

![Subcriber Flow in Buttondown Settings](/assets/images/screenshots/2024-01-21-17-03-43.png)

Settings that can help me understand why subscribers leave the newsletter are important to me too and I use the Unsubscribe Reasons in Buttondown Settings to capture that optional information.

![Unsubscribe Reasons in Buttondown Settings](/assets/images/screenshots/2024-01-21-17-05-45.png)

I also enjoy learning what is happening with my subscribers and I use Notifications in Buttondown Settings to get real-time updates.

![Notifications in Buttondown Settings](/assets/images/screenshots/2024-01-21-17-08-52.png)

#### RSS to Email

Once a post is created as a commit to GitHub, Netlify builds my RSS feed which includes the new post. Next, Buttondown takes the newsletter tasks from there.

Because I publish via RSS, this means Buttondown is doing the work for creating a Draft newsletter for me using "RSS to Email" function. RSS to Email is found in Buttondown Settings under Features.

![RSS to Email in Buttondown Settings Features](/assets/images/screenshots/2024-01-21-16-50-20.png)

I've added [my RSS feed](/rss.xml).

![RSS feeds in Buttondown Settings](/assets/images/screenshots/2024-01-21-16-51-48.png)

I've also customized the intake to lightly modify the import layout.

![RSS feeds intake generated layout](/assets/images/screenshots/2024-01-21-16-56-21.png)

Finally, I append a few standard items using the Design (Email) Footer to add my physical mailing address.

![Design(Email) Footer customization](/assets/images/screenshots/2024-01-21-17-00-06.png)

#### Weekly Commit, Review, and Send

This results in a simple, repeatable recipe each week: 

- GitHub receives my commit(s) on Sunday
- Netlify builds Fudge Sunday 🤔💡🤯🤓 newsletter and updates [my RSS feed](/rss.xml)
- Buttondown creates a new email Draft from my newest RSS entry
- I manually inspect the email Draft in Buttondown and hit the big Send button
- I manually copy the contents of the Buttondown preview into LinkedIn Newsletter (this is admittedly, a chore)
- I craft two shareable LinkedIn posts 
  - to share the [LinkedIn Newsletter](https://www.linkedin.com/newsletters/fudge-sunday-monthly-weekly-6941445840536313856/)
  - to share the archive post on [fudge.org](/)
- GitHub workflows rebuild my special profile README and my personal website to reflect newsletter post updates

Of course, the details matter and this is a very high-level recipe. The next sections of this post will go into the other details that matter.

## How to 11ty

My use of [Eleventy](/topics/eleventy) i.e. [11ty](/topics/11ty) makes my weekly writing pleasurable again. I've made some specific choices along the way to keep my readers enthusiastic and my content readily accessible.

### Cache Rules Everything Around Me (CREAM)

For my Source references, I use the 11ty plugin [unfurl](https://github.com/daviddarnes/eleventy-plugin-unfurl) and set the [Fetch cache](https://www.11ty.dev/docs/plugins/fetch/#change-the-cache-duration) to several weeks which helps avoid throttling by the unfurl API provider [microlink.io](https://microlink.io) duration at 6 weeks (i.e. ```duration: "6w"```) and I've elected to avoid using the ```logo``` since several readers mention it is harder to read in their preferred email application. 🤓

```
// unfurl plug section
  eleventyConfig.addPlugin(pluginUnfurl, {
    duration: "6w",
    template: ({ title, publisher, url, logo }) => `<em><a href="${url}" class="unfurl">Source: ${publisher} — ${title}</a></em>`
  });
```

*Side note: Speaking of plugins, when I was reading up on the many options available to the 11th community, my next project will be to add the [Syntax Highlighting Plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/) to prettify this code snippet above at a later date.
*

## How to Netlify

The Netlify settings I've selected are minimal. I could be using more Netlify functionality but, for now, I opt to keep things simple.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a33dfa3c-cf79-4281-a11f-7417a35d8f20/deploy-status)](https://app.netlify.com/sites/fudge-org-eleventy-excellent/deploys)

I stage locally using ```npm start``` and when I am pleased with the results I commit to main in GitHub which triggers deployment to Netlify per Branches and deploy contexts within Site Configuration on Netlify.

![Branches and deploy contexts within Site Configuration on Netlify](/assets/images/screenshots/2024-01-21-17-56-15.png)

I also enable Pretty URLs

![Pretty URLs](/assets/images/screenshots/2024-01-21-17-58-35.png)

For Domain management and HTTPS, I use settings that allow me to maximize my other Cloudflare settings.

![Domain management](/assets/images/screenshots/2024-01-21-18-01-21.png)

![HTTPS](/assets/images/screenshots/2024-01-21-18-02-10.png)

Specifically, I use Cloudflare CNAME flattening, Full SSL/TLS, Optimization, and Dynamic Redirect Normalization for my legacy Substack URLs i.e. ```(starts_with(http.request.full_uri, "https://sunday.fudge.org/p/"))```.

![CNAME flattening](/assets/images/screenshots/2024-01-21-18-05-39.png)

![Full SSL/TLS](/assets/images/screenshots/2024-01-21-18-07-10.png)

![Optimization](/assets/images/screenshots/2024-01-21-18-09-03.png)

![Dynamic Redirect](/assets/images/screenshots/2024-01-21-18-11-35.png)

![Normalize](/assets/images/screenshots/2024-01-21-18-12-45.png)

## How to GitHub

The GitHub repository I use for Fudge Sunday 🤔💡🤯🤓 is public. Feel free to [review my changelog](https://github.com/JayCuthrell/fudge-org-eleventy-excellent/commits/main/).

Each week, I have two GitHub workflow files that execute to update my personal website [jaycuthrell.com/newsletter](https://jaycuthrell.com/newsletter) and my [special README file that customizes my GitHub profile](https://github.com/JayCuthrell/JayCuthrell).

[jaycuthrell.com/newsletter](https://jaycuthrell.com/newsletter) 
  - [newsletter.py](https://github.com/JayCuthrell/jaycuthrell.com/blob/gh-pages/src/newsletter.py)
  - [cron.yml](https://github.com/JayCuthrell/jaycuthrell.com/blob/gh-pages/.github/workflows/cron.yml)
  
[GitHub special README](https://github.com/JayCuthrell/JayCuthrell)
  - [readme.py](https://github.com/JayCuthrell/JayCuthrell/blob/master/src/readme.py)
  - [cron.yml](https://github.com/JayCuthrell/JayCuthrell/blob/master/.github/workflows/cron.yml)

In the future, I'd like to make use of the [Buttondown API](https://api.buttondown.email/v1/docs) and [further automate](https://buttondown.email/features/integrations) the remaining few manual steps outlined above. That way I essentially can write, submit, and forgo any additional awareness of the remaining steps in my recipe.

So, what will be the next big technology change I use to make the Fudge Sunday 🤔💡🤯🤓 newsletter each week?

Until then… Place your bets!

## Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

***

p.s. As I've gotten older, I have come to appreciate getting snail mail. If you have time to [drop me a postcard](https://jaycuthrell.com/contact) that would be amazing. ✉️