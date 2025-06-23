---
title: "Zettelkasten End of Year for 2023"
description: 'A look back at what I learned this year in this newsletter'
date: 2023-12-31 
---

This week we take a look at what I learned this year and my [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) that powers this newsletter and blog archives.

#### Sidebar

As with my last update a year ago, if you are reading this, I'd like to thank you for your patience as I explored new content formats this year. I am also pleased to share that the [Fudge Sunday](/) newsletter remains a *free* newsletter. 🆓

This year I paid all fees that enable the [Fudge Sunday](/) newsletter to be [hosted](https://www.netlify.com/pricing/) and [delivered](https://buttondown.email/pricing) to your inbox — but if you unsubscribe it only means my costs *might* go down a bit. If you are only reading this on my website, feel free to [subscribe](https://buttondown.email/jaycuthrell). 🎟️

If you are concerned about me putting referral links or interstitial banner ads in the content, there is no need to worry. Late last year, I was approached by an advertiser but the *"Links From Our Sponsor"* section was a very short experiment. 🤓

Further, I've removed all forms of tracking after experiments with [Buttondown click tracking](https://docs.buttondown.email/odds-and-ends/privacy-and-security), Google Analytics, LinkedIn Creator Analytics, and now focus primarily on FQDN claims with [Google Search Console](https://search.google.com/search-console?resource_id=https://fudge.org/) (i.e. Google Webmaster services). Specifically, for [LinkedIn Analytics](https://www.linkedin.com/help/linkedin/answer/a597877?hcppcid=search), I shared my findings over the year in an 11-part series of posts as a LinkedIn Creator.

- Jan 2023 https://www.linkedin.com/pulse/new-newsletter-service-whos-jay-cuthrell/
- Feb 2023 https://www.linkedin.com/pulse/followers-impressions-engagements-jay-cuthrell
- Mar 2023 https://www.linkedin.com/pulse/linking-linkedin-lessons-learned-jay-cuthrell
- Apr 2023 https://www.linkedin.com/pulse/techmeme-traffic-trifecta-jay-cuthrell
- May 2023 https://www.linkedin.com/pulse/may-movement-maybe-more-jay-cuthrell
- Jun 2023 https://www.linkedin.com/pulse/june-jumps-jostles-jingles-jay-cuthrell
- Jul 2023 https://www.linkedin.com/pulse/justifiably-jejune-july-jay-cuthrell
- Aug 2023 https://www.linkedin.com/pulse/gust-august-jay-cuthrell
- Sep 2023 https://www.linkedin.com/pulse/september-sluggishness-jay-cuthrell
- Oct 2023 https://www.linkedin.com/pulse/october-2023-mobile-growth-jay-cuthrell-5sayc
- Nov 2023 https://www.linkedin.com/pulse/linkedin-creator-lessons-so-far-jay-cuthrell-mu6oc

# Getting Informed

While avoiding listicles, I do intend to continue this series of zettlekasten updates in the last week of the year.

- 2021 https://fudge.org/archive/fudge-sunday-zettelkasten-end-of-year-favorites/
- 2022 https://fudge.org/archive/zettelkasten-end-of-year-for-2022/
- 2023 https://fudge.org/archive/zettelkasten-end-of-year-for-2023/ 🆕

#### How The Sausage Is Made

I've had a few emails from the readership this year who are amazed I have published the [Fudge Sunday](/) newsletter for so long without missing a week.

> *Jay, how do you find time to make Fudge Sunday every week?*

To be clear, not every [Fudge Sunday](/) newsletter is going to be a +2500 words magnum opus... and I will experiment... but getting to around 500-1000 words each week seems to be the sweet spot for me at least. Will I go over or under sometimes? Sure.

#### How To Fudge Sunday for 2023

This year I've experimented with serval workflows and landed on what works best for me. I'll share the basic 10-step process here:

1. My stack begins with my public [GitHub repository](https://github.com/JayCuthrell/fudge-org-eleventy-excellent) and during the week on my Apple MacBook Air M1 (2020) local machine, I keep a file open in Obsidian as either a daily note from my newsletter readings, Slack Save for Later list, etc. that I can also update from my iPhone 13 mini in Obsidian as well 🔖 📖
2. On my Apple MacBook Air M1 (2020) local machine, I use Microsoft Visual Studio Code with a few extensions 🪜 ![my Microsoft Visual Studio Code Extensions list](/assets/images/screenshots/2023-12-31-15-21-19.png)
    - Do these extensions play well together? Honestly, I don't know but they provided me utility at some point. 🤷‍♂️
    - I should probably clean these out and see what I miss in 2024. YMMV. 🧹
3. After a few years of toil with Revue ([Ughh...](https://www.techmeme.com/221214/p28#a221214p28)), Substack ([Ughh...](https://cuthrell.com/@jay/111620668522681215)), Gatsby ([Ughh...](https://www.gatsbyjs.com/blog/gatsby-is-joining-netlify/)), etc. I have fully embraced [POSSE](/topics/posse) again and adopted [Eleventy](https://www.11ty.dev) thanks to the wonderful [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent) 😍
    - I have customized Eleventy Excellent basics from the [documentation](https://eleventy-excellent.netlify.app). 🥰
    - I have made additional enhancements from [the Eleventy community](https://11tybundle.dev). 🏋️‍♀️
4. Each week I add a new markdown file in ```posts/``` to create a newsletter 📝
   - I update frontmatter with the appropriate title, description, date, and tags. 📝
   - I use common snippets for my post structure. 📝
   - I preview using `npm start` and visit http://localhost:8080 on my local machine. 👀
   - I save the markdown file and preview edits along the way. 💾
   - I turn on MacOS accessibility to "read on screen" at 2x speed to catch things Grammarly misses. 👂
   - I save the final version. ✅
   - Anecdotally, I always seem to miss something because the power of git is no substitute for the humility required to be a writer who acknowledges the value of an editor. 😬
5. Commit to GitHub 🎉
6. Await automated build at [Netlify](https://app.netlify.com/sites/fudge-org-eleventy-excellent/deploys) 🤖
7. Await (or manually refresh) [RSS to Email](https://docs.buttondown.email/advanced-features/rss-to-email) powered by [Buttondown](https://docs.buttondown.email) 🤖
   - My current process is [95% automated](https://docs.buttondown.email/advanced-features/automations) and 5% sweating the final details before I launch to thousands of subscribers. 🤔
   - When I refresh the RSS to Email, I am presented with a "Draft" in Buttondown. 🤓
   - I do a quick scan to make sure that what I intended is being imported as expected. 🧐
   - I hit send and hope for no unsubscribes as Buttondown handles delivery. 🤣
8. As of December 2023, I've manually replicated my Buttondown email newsletter as a [LinkedIn Newsletter](https://www.linkedin.com/newsletters/fudge-sunday-monthly-weekly-6941445840536313856/) 🔁
   - I copy the content of the first delivered email I receive to my test email account. 📥
   - I paste the content into the LinkedIn Newsletters WYSIWYG form. 😕
   - I create a quick and dirty [Canva](https://www.canva.com) image that conforms to LinkedIn Newsletter formatting. 🖼️ ![example of the LinkedIn Newsletter WYSIWYG form](/assets/images/screenshots/2023-12-31-16-12-56.png)
   - I send to another ~800 subscribers that are on LinkedIn that may prefer the ease of notification and email delivery. 🚚
9.  Monitor my inbox for replies and make any typo corrections then commit back to GitHub 📝
10. Await Sunday night automated GitHub Actions ⏰
   - Update [README.md](https://github.com/jaycuthrell) (special repository) for my GitHub profile via [cron.yml](https://github.com/JayCuthrell/JayCuthrell/blob/master/.github/workflows/cron.yml) file. 🤖
   - Update [newsletter.md](https://jaycuthrell.com/newsletter/) for my personal website via [cron.yml](https://github.com/JayCuthrell/jaycuthrell.com/blob/gh-pages/.github/workflows/cron.yml) file. 🤖

#### Favorites

In keeping with the yearly Zettlekasten post tradition, a common email reply from my readership this year was as follows:

> *Jay, where do you come up with this stuff?*

For background, at least once a year I get this question or a similarly worded version of this question. For 2023, I reached the point where I was reading ~100 newsletters but recently pruned all [Substack newsletters](https://cuthrell.com/@jay/111621300275593638).

I still use Obsidian and [briefly flirted with using Drafts](https://fudge.org/archive/plugins-patterns-and-potpourri/). My Safari Reading List has been tamed for 2023 after seeing just how much I had backlogged in 2022.

My startup Safari browser page is an empty page now. I've completely exited from using Twitter/X (including blocking t.co and related cruft with [pihole](https://github.com/JackCuthbert/pihole-twitter/blob/main/pihole-twitter.txt)).

My goal is to experiment again with [Kagi Search](https://kagi.com/search?q=jay+cuthrell) more in 2024 in addition to continued use of [DuckDuckGo](https://duckduckgo.com/?q=jay+cuthrell). I believe that Google Search, Bing Search, and similar are still useful in certain situations if you release all cookies, VPN, or use an anonymization service to get the gist of what others might be seeing vs. your increasingly hyper-targeted assumption profile that weighs heavily upon your IP address as a basis for customized results.

What will my predictions be next week in my first newsletter for 2024?

Until then... Place your bets!

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

***

p.s. As I've gotten older, I have come to appreciate getting snail mail. If you have time to [drop me a postcard](https://jaycuthrell.com/contact) that would be amazing.