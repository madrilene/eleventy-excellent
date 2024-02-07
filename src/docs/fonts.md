---
title: Fonts
---

This starter uses three fonts, Red Hat Display, Figtree and Roboto Mono. You can add or delete fonts in `src/assets/fonts`.

You can create font subsets for a better performance, for example using the [Fontsquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).

Next, edit `src/assets/css/global/fonts.css`.

Add your new font aliases in `src/_data/designTokens/fonts.json`.

Finally, in `src/_layouts/base.njk` edit the font preloads. Roboto Mono is only used for code blocks. Its preload is set directly in the post layout: `src/_layouts/post.njk`.