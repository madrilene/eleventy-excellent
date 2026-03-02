---
title: Post with some code
description: Syntax Highlighting is achieved by a pack of Eleventy plugins. No browser/client JavaScript, highlight transformations are all done at build-time.
eleventyExcludeFromCollections: true
excludeFromSitemap: true
date: 2022-09-01
tags:
  - syntax highlighting
  - feature
updated: 2025-10-31T15:22:42+01:00
created: 2025-04-30T13:59:31+02:00
---

This theme uses 11ty's [Syntax Highlighting Plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/), a pack of Eleventy plugins for PrismJS syntax highlighting. No browser/client JavaScript, highlight transformations are all done at build-time.

```js
const cards = [...document.querySelectorAll('.card')];
cards.forEach(card => {
  card.style.cursor = 'pointer';
  let down,
    up,
    link = card.querySelector('a');
  card.onmousedown = () => (down = +new Date());
  card.onmouseup = () => {
    up = +new Date();
    if (up - down < 200) {
      link.click();
    }
  };
});

// © Heydon Pickering
```

```css
.smol-container {
  width: min(100% - 3rem, var(--container-max, 60ch));
  margin-inline: auto;
}

/* © Stephanie Eckles, https://smolcss.dev/ */
```

Edit styles in `css/blocks/code.css`
