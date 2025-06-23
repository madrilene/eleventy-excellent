---
title: "11ty RSS Activepieces"
description: "A look at enhancing 11ty POSSE with RSS 2.0, Open Graph, and Activepieces"
date: 2024-02-11
---

This week is a look at enhancing 11ty by extending the RSS feed of my newsletter archive and blog to include an enclosure that borrows from Open Graph image functionality with the intent of populating the input for Activepieces as a [POSSE](/topics/posse) tool for posting to Mastodon and LinkedIn. That was a mouthful.

My inspiration? [spyglass.org](https://spyglass.org)

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7161019681313595395" height="385" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

https://www.linkedin.com/feed/update/urn:li:activity:7161019682546733056/

Indeed! 💯 This is why I too am frustrated with basic social network automation and realizing how challenging it is across the various platforms.

Open Web vs Open Weep.

I was just reflecting on the last remaining manual steps for my weekly newsletter of copying and pasting a manual update for Mastdon and LinkedIn and each one has the quirks of unfurl or hashtag handling. And then... an idea. 💡

## Getting Informed

Thanks to the hard work of others and the growing number of options for cross-posting on social networks, accomplishing the goal of automatic posting to wildly different social networks like Mastodon and LinkedIn was *not as difficult as I imagined*.

Is my approach rock solid Enterprise grade CMS with queue depth tolerance for transient flailing within interdependent systems?

> *Sir. This is an Arby's.*

Does it scratch my itch? Yes. For now.

I wanted to simplify my [POSSE](https://fudge.org/archive/me-and-my-posse/).

Having tried a few other social media automation options before, I didn't want to use IFTTT and I didn't want to use Zapier.

What I came up with:

- RSS feeds are polled by [activepieces.com (my referral link)](https://cloud.activepieces.com/sign-up?referral=DT47qKAfA4PZOIyqWs8Eu) 
- Postings are made to my Mastodon and LinkedIn profiles by [activepieces.com (my referral link)](https://cloud.activepieces.com/sign-up?referral=DT47qKAfA4PZOIyqWs8Eu)

Here is the recipe I used...

### RSS 2.0 enclosure

First, I'm using awesome plugins already as part of my [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent) setup like [RSS](https://www.11ty.dev/docs/plugins/rss/) and also using the included functionality of [Open Graph images](https://eleventy-excellent.netlify.app/get-started/#open-graph-images). One of the benefits is a meta info functionality that automates adding the generated image for each post.

{% raw %}
```markup
<meta
  property="og:image"
  content="{{ meta.url }}{% if (layout == 'post') %}/assets/images/social-preview/{{
    title | slugify
  }}-preview.jpeg
  {% else %}{{ meta.meta_data.opengraph_default }}
  {% endif %}"
/>
```
{% endraw %}

Second, RSS 2.0 supports enclosures and MIME types.

Putting that all together, this code snipped extends the RSS 2.0 plugin template file ```feed.njk```. This means we have an input image that can be used to satisfy the requirements for creating a richer LinkedIn post format.

{% raw %}
```markup
     <enclosure url="{{ meta.url }}/assets/images/social-preview/{{
  post.data.title | slugify
}}-preview.jpeg" type="image/png" />
```
{% endraw %}

If you are a more visual person, this screenshot might be helpful to illustrate how simple this addition is.

![Visual Studio Code diff of feed.njk](/assets/images/screenshots/2024-02-10-02-03-26.png)

### Activepieces RSS inputs

First, the LinkedIn post format requirement for an image using an Activepieces Flow Step needs to be satisfied by the RSS input.

![Activepices Flow RSS input](/assets/images/screenshots/2024-02-10-01-27-45.png)

Second, the essential information like title, url, author, and image can be customized for LinkedIn fields in the next Activepieces Flow Step.

*(Yes, LinkedIn is a bit extra to post successfully.)*

![Activepices Flow LinkedIn fields top](/assets/images/screenshots/2024-02-10-01-29-29.png)

*(And yes, LinkedIn has more extra after that too in order to post successfully.)*

![Activepices Flow LinkedIn fields bottom](/assets/images/screenshots/2024-02-10-01-30-58.png)

Third, the RSS input can also be sent to other services like Mastdon which have lesser requirements than the LinkedIn Activepieces Flow Step.

![Activepieces Flows](/assets/images/screenshots/2024-02-10-01-24-06.png)

Finally -- putting it all together by pressing the "Retest" button a few times and reloading LinkedIn...

![Activepices Flow posting an RSS input to LinkedIn](/assets/images/screenshots/2024-02-10-01-38-15.png)

Oh, and for Mastodon, the same process but much less to fill into the Activepieces Flow Step form.

![Activepices Flow posting an RSS input to Mastodon](/assets/images/screenshots/2024-02-10-14-26-12.png)

In case you find examples useful, I've also exported my Activepieces Flows as json files.

https://github.com/JayCuthrell/activepieces

Next, I'll be testing this new approach to see if it works as expected for Fudge Sunday. My understanding is that [LinkedIn OAuth 2.0 tokens expire at 2 months by default](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authentication).

Further, I'll probably stay manual using Activepieces via Webhook instead of an RSS feed trigger for a few more iterations. I need to check to ensure that my assumptions don't result in my being blocked from LinkedIn if I make a mistake somewhere in my Activepieces settings. 

For example, to share this post to both Mastodon and LinkedIn I would replace the RSS trigger before with a Webhook trigger as follows:

```shell
curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X POST --data \
"{\"title\": \"11ty RSS Activepieces\",\"url\": \"https://fudge.org/archive/11ty-rss-activepieces/\",\"desc\": \"A new post\",\"opengraph\": \"https://fudge.org/assets/images/social-preview/11ty-rss-activepieces-preview.jpeg\"}" \
https://cloud.activepieces.com/api/v1/webhooks/UNIQUE_ENDPOINT_GOES_HERE
```
![Activepieces Flow using a Webhook input to both Mastdon and Linkedin](/assets/images/screenshots/2024-02-11-08-28-22.png)

Said another way, I might simply end up [writing my own Python script](https://github.com/linkedin-developers/linkedin-api-python-client) and setting up another cron job like scenario that calls Activepieces running as a docker image or a just-in-time [Pulumi deployed instance](https://github.com/activepieces/activepieces/tree/main/deploy/pulumi) or... well, you get the idea. 🤓

Or, I just give up on posting to LinkedIn entirely. 🤣

Until then... 

## Travel Note for SxSW 2024

[I'm going](/archive/south-by-southwest-bound-and-down/) to SxSW 2024.

Will you be at SxSW 2024 too?

If so -- [let's catch up](https://jaycuthrell.com/contact) in the real world.

I'm also publishing [my SxSW 2024 schedule picks](https://schedule.sxsw.com/favorite/user/985f8ae425a0ca54469639ae92234564491ace14) (so far).

<iframe src="https://cuthrell.com/@jay/111774189599544610/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://cuthrell.com/embed.js" async="async"></script>

## Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

***

p.s. As I've gotten older, I have come to appreciate getting snail mail. If you have time to [drop me a postcard](https://jaycuthrell.com/contact) that would be amazing. ✉️