---
title: Design tokens
---

Edit all your preferences (colors, fluid text sizes etc.) in `src/_data/designTokens/*.json`.

Additional colors, variants and gradients for custom properties are automatically created in `src/assets/css/global/variables.css` based on the colors set in `colors.json`. If you change names you should edit `variables.css` as well and check if the names are used elsewhere in the template.

In the [style guide](/styleguide/) you can see how everything turns out.

Please note that adjustments in `viewports.json` only affect your utility classes and custom properties, but do not change the dimensions of your page. You can control this using the custom property `--wrapper-width`.