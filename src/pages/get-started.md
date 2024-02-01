---
title: Get started
permalink: /get-started/index.html
description: Websites built with this starter
layout: page
preloads:
  href: '/assets/fonts/robotomono/robotomono-regular.woff2'
  as: 'font'
  type: 'font/woff2'
  crossorigin: true
---

You can use this starter as a template for your blog and you are ready to go! But there are some adjustments you have to make, most of them in `src/_data/meta.js`. It sets different "hard coded" text values all over the template, you can change the language, etc.

Also, edit personal your details and social media in `src/_data/personal.yaml`.

Find available social media / service icons in `src/_includes/svg` (prefixed with "social-").
If you add new icons they too must be prefixed with "social-".

Open `src/assets/css/blocks/external-link.css`. Replace "eleventy-excellent.netlify.app" with your own domain. This is about the external link indicators, they are matched with your domain. If you don't want to use external link indicators, feel free to delete the whole style rule. You can also add the class `no-indicator` to any anchor element you want to except from this rule.

Edit your navigation items in `src/_data/navigation.js`.

Add your custom (favicon) icons in `src/assets/images/favicon`.

Not required, but recommended: you can delete the following files and archives (the theme may break though, if there are still references to them):

- `github.js` in `src/_data/`
- `builtwith.json` in `src/_data/`
- all the blog posts, as these serve only as an example
- all pages in `src/pages`, though you might want to keep `index.njk` as a starting point
- image folders "screenshots", "blog" and "gallery" in `src/assets/images`

If you don't want to feature any code examples, you may delete the whole stylesheet for syntax highlighting: `src/assets/css/blocks/code.css`.

## Change fonts

This starter uses three fonts, Red Hat Display, Figtree and Roboto Mono. You can add or delete fonts in `src/assets/fonts`.

You can create font subsets for a better performance, for example using the [Fontsquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).

Next, edit `src/assets/css/global/fonts.css`.

Add your new font aliases in `src/_data/designTokens/fonts.json`.

Finally, in `src/_layouts/base.njk` edit the font preloads. Roboto Mono is only used for code blocks. Its preload is set directly in the post layout: `src/_layouts/post.njk`.

## Edit the design tokens

Edit all your preferences (colors, fluid text sizes etc.) in `src/_data/designTokens/*.json`.

Additional colors, variants and gradients for custom properties are automatically created in `src/assets/css/global/variables.css` based on the colors set in `colors.json`. If you change names you should edit `variables.css` as well and check if the names are used elsewhere in the template.

In the [style guide](/styleguide/) you can see how everything turns out.

Please note that adjustments in `viewports.json` only affect your utility classes and custom properties, but do not change the dimensions of your page. You can control this using the custom property `--wrapper-width`.

## Further adjustments

Optional: rename `.env-sample` to `.env`. You may set a custom URL for local development and add your own variables.

Add and delete your custom block stylesheets in `src/assets/css/blocks/*.css`, they get pulled in your output stylesheet automatically.

If you are working with **VS Code** I recommend installing the "Tailwind CSS IntelliSense" addon, as it works also for our custom utility classes. That said, you will find that Tailwind CSS does not work as you might expect. I exlain this in [one of the blog posts](/blog/what-is-tailwind-css-doing-here/).

## More features

The [blog posts](/blog/) explain / show some basic features that aren't covered here:

- [Galleries](/blog/post-with-a-gallery/)
- [Open Graph images](/blog/open-graph-images/)
- [Markdown](/blog/post-with-all-the-markdown/)
- [Youtube](/blog/post-with-a-video/)
- [Using the image plugin](/blog/post-with-an-image/)
- [Syntax highlighting](/blog/post-with-some-code/)
- [301 redirects](/blog/post-with-301-redirects/)
- [Fetch content](/blog/post-with-fetched-content/)
