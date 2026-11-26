---
title: Masonry
---


Native masonry-style layout is arriving as CSS Grid Lanes (`display: grid-lanes`). Browsers that support it get `@supports` in `grid.css`. Everywhere else, `<custom-masonry>` polyfills with JavaScript.

It should be used carefully so we don't create confusion with the tabbing order. In version 3 of the starter I made the masonry layout a web component, and no longer a opt-in feature (was: `masonry: true` in the front matter).

`<custom-masonry>` adjusts item positions from column space and content size. The script (`custom-masonry.js`) loads once per page via `data-island="once"`, and returns when `CSS.supports('display', 'grid-lanes')` is true.
Optional: pass in `layout="50-50"` to set a 50% width for each column.

Without JavaScript (and without Grid Lanes), the layout falls back to the regular grid in `src/assets/css/global/compositions/grid.css`.

```js
<custom-masonry> (children) </custom-masonry>
<custom-masonry layout="50-50"> (children) </custom-masonry>
```

<div><custom-masonry>
   <div style="background-color: var(--color-primary); aspect-ratio: 3/2;"></div>
	 	<div></div>
		<div style="background-color: var(--color-tertiary); aspect-ratio: 4/5;"></div>
		<div style="background-color: var(--color-primary);"></div>
		<div></div>
		<div style="background-color: var(--color-secondary); aspect-ratio: 5/4;"></div>
		<div></div>
		<div style="background-color: var(--color-secondary);"></div>
    <div style="background-color: var(--color-primary); aspect-ratio: 16/9;"></div>
	 	<div></div>
</custom-masonry></div>

<style>
  custom-masonry div {
    inline-size: min(30rem, 100%);
		aspect-ratio: 1;
    background-color: var(--color-text);
  }
</style>