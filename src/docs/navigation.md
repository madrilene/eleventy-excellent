---
title: Navigation
---

Edit your navigation items in `src/_data/navigation.js`.

You have two options for mobile navigation: by default, the navigation on small displays is converted to small pills that wrap. This does not require any additional JavaScript.

Before version 2.0 a slide out drawer was the default, you can activate it again in `src/_data/meta.js`:

```js
navigation: {
   // other settings
    drawerNav: true,
    navLabel: 'Menu'
  },
```

`drawerNav` activates the navigation drawer, [built according to Manuel Matuzović's article on web.dev.](https://web.dev/articles/website-navigation)