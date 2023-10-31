---
title: Get started
permalink: /get-started/index.html
description: Websites built with this starter
layout: page
preloads:
  href: '/assets/fonts/robotomono/robotomono-variablefont_wght-webfont.woff2'
  as: 'font'
  type: 'font/woff2'
  crossorigin: true
---

- **Important:** edit meta data in `src/_data/meta.js`, it's being used all over the template.
- Have a look at the [blog posts](/blog/), they explain some basic features that aren't covered here.
- Search for 'eleventy-excellent.netlify.app'. You'll find an entry in `src/assets/css/global/global-styles.css`. Replace with your own domain. This is about the external link indicators, they are matched with your domain. If you don't want to use external link indicators, feel free to delete the whole style rule (not the whole style sheet!). You may also add the class `no-indicator` to any anchor element you want to except from this rule.
- Edit your social media in `src/_data/social.js` and `src/_includes/icons`. If you add new icons they must be prefixed with "social-". By default you have RSS, mastodon, twitter, ko-fi, linkedin and github. Great resource: https://lucide.dev/
- Edit your navigation items in `src/_data/navigation.js`.
- Not required, but recommended: Delete `github.js` in `src/_data/github.js` and the blog posts, as these serve only as an example.
- Edit your preferences (colors, fluid text sizes etc.) in `src/assets/design-tokens/*.json`.
- Optional: add your custom (favicon) icons in `src/assets/images/favicon`.
- Optional: rename `.env-sample` to `.env`. You may set a custom URL for local development and add your own variables.
- Optional: Change fonts. This starter uses three fonts, Red Hat Display, Inter and Roboto Mono. You can add or delete fonts in `src/assets/fonts`. I recommend creating font subsets for performance, for example using the [Fontsquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator). Next, edit `src/assets/css/global/fonts.css`. Add your new font aliases in `src/assets/design-tokens/fonts.json`. Finally, in `src/_layouts/base.njk` edit the font preloads. Roboto Mono is only used for code blocks. It's preload is set directly in the post layout: `src/_layouts/post.njk`.
- If you don't want to feature any code examples, you may delete the whole stylesheet for syntax highlighting: `src/assets/css/blocks/code.css`.
- Add and delete your custom block stylesheets in `src/assets/css/blocks/*.css`, they get pulled in your output stylesheet automatically.
- If you are working with VS Code I recommend installing the Tailwind CSS IntelliSense addon, as it works also for our custom utility classes!
