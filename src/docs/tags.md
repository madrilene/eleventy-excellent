---
title: Tags
---

This was probably the most opinionated decision: tags have been integrated since version 2.0.

In several places you will find a code block that looks like this:

{% raw %}

```jinja2
<!-- loop posts -->
{% set itemList = collections.posts %}
{% for item in itemList.slice(0, 4) %}
<!-- activate tags -->
{% set activateTags = true %}
<!-- set heading context -->
{% set headingContext = "h3" %}
<!-- card -->
{% include 'components/card.njk' %}
{% endfor %}
```

{% endraw %}

`card.njk` is imported as a component, and some settings are made.
With `set activateTags = true` you can switch the display of tags in this card collection instance.

The tags are placed in the front matter of the posts, using the syntax

```yaml
tags:
  - image
  - feature
```

or

```md
tags: ['markdown', 'feature']
```

If you generally do not want any tags to show, it is probably easiest to not create any at all.
