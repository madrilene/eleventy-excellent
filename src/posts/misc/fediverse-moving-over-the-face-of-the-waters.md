---
title: "Fediverse Moving over the Face of the Waters"
description: ''
date: 2022-12-03 21:21:49.425681+00:00
---

This is an early edition of Fudge Sunday where we we take a look at moving a newsletter from Substack to Buttondown and from Twitter to Mastodon.

Music: [\*Moby - "God Moving over the Face of the Waters" (1995)\*](https://www.youtube.com/watch?v=UMfn7KXdPQQ)

# Getting Informed

\*Record scratch\* \*Freeze frame\* 

Yup, that's my newsletter arriving a full day early. You're probably wondering how we ended up in this situation.

> Subscriber asks: \*Why is this newsletter moving? Again?\*
> 
> Subscriber asks: \*Wait, Twitter? Didn't you\* [\*stop using it in 2017\*](https://fudge.org/archive/on-twitter)\*?\*

That's right. To explain, I'm going to play back a recent thread from my new Mastodon account on my new self-hosted Mastodon single-user instance.

## Migration and Consolidation of Newsletter and Blog

[Last month](https://cuthrell.com/@jay/109446544660219986) I learned that my cutover from Revue to Substack came at a cost.[^1]

> \*Today I learned the default sharing link for Substack app does not use my cu$tom domain.😳\*
> 
> [\*sunday.fudge.org\*](http://sunday.fudge.org) \*swaps to\* [\*open.substack.com/pub/fudge\*](http://open.substack.com/pub/fudge) \*instead.🤔\*
> 
> \*This design choice is enough to make me reconsider my migration to Substack…. just 6 months after leaving Revue (Twitter).😂\*
> 
> \*Maybe I need to try and roll my own?🤷‍♂️\*
> 
> \*Or, do I test Buttondown first?🤷‍♂️\*
> 
> \*Thank you for attending my 500 char TED talk.🤓\*

[Over several days](https://cuthrell.com/@jay/109440951231030300) I would find out Substack URL handling actually was going to involve more time to migrate away from than I understood 6 months ago. Eventually, I made a decision that involved consolidation and investment.[^2]

> \*I think I'm going to punt... on a couple fronts and simplify this.\*
> 
> \*Punt: Netlify blog (\*[\*fudge.org\*](http://fudge.org)\*)\*
> 
> \*Punt: Substack newsletter (\*[\*sunday.fudge.org\*](http://sunday.fudge.org)\*)\*
> 
> \*Plan: Move everything to Buttondown as the new simplified\* [\*fudge.org\*](http://fudge.org)
> 
> \*Migrate: My blog posts (mdx but mostly markdown)\*
> 
> \*Migrate: My newsletter posts to see how awful the export/import turns out to be getting off of Substack or prior archives from Revue, wget, curl, etc....\*

So, if you are reading this... the migration was a success.

To get my newsletter migrated and able to post this update I performed the following steps:

- Go to [Substack](https://substack.com) -> Dashboard -> Settings -> Exports -> Create new export
- Wait for Substack confirmation email to arrive indicating the export completed
- Download Substack export (zip file) 
- Go to [Buttondown Settings Importing](https://buttondown.email/settings#importing) to upload the Substack export (I ended up sending a support ticket, YMMV)
- Confirmed successful import
- Completed a Stripe purchase for [Buttondown Standard](https://buttondown.email/settings#billing) for up to 5000 subscribers 🤓
- Did lots of DNS updates for my cu$tom domain and updated [Buttondown Fancy Stuff](https://buttondown.email/settings#domains) and wait for propagation (in my case Cloudflare)
- Customized [Buttondown Newsletter](https://buttondown.email/settings#newsletter-general)
- Go to [Buttondown Settings Importing](https://buttondown.email/settings#importing) to upload the Substack subscriber export
- Wait for Buttondown approvals of the subscriber import
- Played around with drafts, formatting, customizations, etc.

### Leaving The Bird for The Mastodon

I've avoided active use of Twitter for at least 5 years. So, while my account(s) are still up there is no content associated with them.

As I've written previously[^3] on the topic of Twitter, this wasn't like I was giving up anything to stop using Twitter. In fact, I missed what Twitter was back in 2007... a bit more civil and a bit less of that old Yogi Berra platitude due to the insufferable bot crowding.

Since I haven't operated `cuthrell.com` as an active web property, it seemed like the best vanity domain to host a single-user instance of Mastodon. Plus, I already had a Linode VPS that was available and up to the task.

To get on the Fediverse I performed the following steps:

- Followed the basic Linode community recipe with personal choices along the way (naming conventions)
- Added back my `.well\_known` directory of files for Keybase proofs, etc... to the html root for `nginx`
- Added my new Mastodon handle to my Twitter profile 
- Used Glitch hosted [Fedifinder](https://fedifinder.glitch.me/#) to poll my Twitter Lists, Followers, and export folks
- Used my Mastodon import function from the Fedifinder export
- Waited for others to [follow me back](https://cuthrell.com/@jay) or appear over the next 24-48 hours appearing in my timeline
- While I waited it got me thinking about migrating my newsletter away from Substack

 ![COUNTA of Mastodon Instances.png](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/11f02ff6-5667-43be-802c-b3a7f0dedd91.png) 

And here we are with a few broken links, redirects to be done, and a lot of fun along the way! 🤓

What breaks next in my quest for a Markdown + Email + Blog + ActivityPub?

Until then... Place your bets!

![birds](https://buttondown-attachments.s3.us-west-2.amazonaws.com/images/bd8b355d-a3dd-4a53-b867-75e420dbb438.jpg)

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).

[^1]: At the time I wasn't planning to attempt this migration before the next issue of Fudge Sunday but here we are.

[^2]: Actually, Gatsby Cloud not Netlify, but I digress.

[^3]: But that's for another post once I take down `sunday.fudge.org` once and for all as a site that only performs HTTP 301 until I see traffic fall off completely.