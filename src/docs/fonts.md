---
title: Fonts
---

This starter uses two custom fonts, Red Hat Display and Inclusive Sans. You can add or delete fonts in `src/assets/fonts`.

I often create font subsets using the [Fontsquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).

Next, edit `src/assets/css/global/base/fonts.css`.

Add your new font aliases in `src/_data/designTokens/fonts.json`.

In `src/_includes/head/preloads.njk` edit the font preloads (Recommended one weight per font).

If you want to use your font in the **OG images template**, store them in `src/_includes/fonts` to use them as `base64` encoded inline CSS. This makes you independent of the system executing the build.