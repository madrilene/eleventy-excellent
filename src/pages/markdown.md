---
title: All the markdown
permalink: /markdown/index.html
description: "That's a markdown page"
layout: page
---

Jelly sesame snaps gummies cookie oat cake. Cake gingerbread bonbon muffin gummies gummies oat cake candy icing. Danish bear claw marshmallow gingerbread jelly beans. Icing muffin ice cream pastry chupa chups.

## h2 Heading

### h3 Heading

#### h4 Heading

Muffin bonbon jujubes cheesecake chupa chups shortbread ice cream cotton candy cake. Jelly-o biscuit dessert danish dessert pastry tootsie roll lemon drops gingerbread. Cheesecake donut marzipan sweet roll icing muffin halvah. Dragée donut cake biscuit pie carrot cake sesame snaps jelly-o gummi bears.

Soufflé topping shortbread lemon.

## hr

---

## Typographic replacements

**The replacement converts this input:**

```
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
test.. test... test..... test?..... test!....
!!!!!! ???? ,, -- ---
"Smartypants, double quotes" and 'single quotes'
```

**To this:**

(c) (C) (r) (R) (tm) (TM) (p) (P) +-
test.. test... test..... test?..... test!....
!!!!!! ???? ,, -- ---
"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**
_This is italic text_
~~Strikethrough~~

## Blockquote

> rbread. Cheesecake donut marzipan sweet roll icing muffin halvah. Dragée donut cake biscuit pie carrot cake sesame snaps jelly-o gummi bears. Cotton candy cookie croissant fruitcake.
> by very smart author

## Lists

### Unordered lists

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
- Very easy!

### Ordered lists

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Code

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

## Links

`rel="noreferrer noopener"` and `target="_blank"` is added automatically to external links. So is an indicator icon, see global-styles.css
[link text](http://dev.nodeca.com)
[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica (enabled via linkify)

### Emojis

Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
Shortcuts (emoticons): :-) :-( 8-) ;)

### mark

==Marked text==

### Footnotes

Footnote 1 link[^first].
Footnote 2 link[^second].
Inline footnote^[Text of inline footnote] definition.
Duplicated footnote reference[^second].

[^first]:
    Footnote **can have markup**
    and multiple paragraphs.

[^second]: Footnote text.

\*[HTML]: Hyper Text Markup Language
