---
title: Tags
---

This was probably the most opinionated decision: tags have been integrated since version 2.0.

In several places you will find a code block that looks like this:

{% raw %}

```html
<!-- loop posts -->
{% set itemList = collections.posts %} {% for item in itemList.slice(0, 4) %}
<!-- activate tags -->
{% set activateTags = true %}
<!-- set heading context -->
{% set headingContext = "h3" %}
<!-- card -->
{% include 'components/card.njk' %} {% endfor %}
```

{% endraw %}

Here `card.njk` is imported as a component, and some settings are made beforehand. In connection with tags, ` {% set activateTags = true %}` is important, because here you can switch off the display of tags in this card instance.

The tags are in your collection items in the front matter with the syntax

{% raw %}

```md
tags:
  - image
  - feature
```

{% endraw %}

or

{% raw %}

```md
tags: ['markdown', 'feature']
```

{% endraw %}

are entered.

If you generally do not want any tags to show, it is probably easiest to not create any at all.
