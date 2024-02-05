---
title: First steps
date: 2024-01-01
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