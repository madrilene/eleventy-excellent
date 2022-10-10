---
title: All the markdown
permalink: /markdown/index.html
description: "That's a markdown page"
layout: page
---

# h1 Heading

Jelly sesame snaps gummies cookie oat cake. Cake gingerbread bonbon muffin gummies gummies oat cake candy icing. Danish bear claw marshmallow gingerbread jelly beans. Icing muffin ice cream pastry chupa chups. Topping jelly-o wafer croissant marshmallow topping jelly-o carrot cake croissant. Chocolate cake croissant liquorice shortbread muffin candy. Danish toffee dragée powder chocolate icing apple pie. Jujubes candy chocolate jelly pastry cheesecake dragée. Tiramisu sugar plum sesame snaps cake caramels sugar plum sweet roll. Marzipan dragée powder apple pie chocolate cake. Fruitcake marshmallow dessert macaroon cheesecake pie sweet roll dragée gummi bears. Gummi bears lollipop cookie chocolate cookie.

## h2 Heading

### h3 Heading

#### h4 Heading

Muffin bonbon jujubes cheesecake chupa chups shortbread ice cream cotton candy cake. Jelly-o biscuit dessert danish dessert pastry tootsie roll lemon drops gingerbread. Cheesecake donut marzipan sweet roll icing muffin halvah. Dragée donut cake biscuit pie carrot cake sesame snaps jelly-o gummi bears. Cotton candy cookie croissant fruitcake liquorice fruitcake. Dragée dragée muffin gingerbread chocolate. Toffee sweet cotton candy sweet gingerbread macaroon liquorice ice cream. Carrot cake soufflé chocolate icing gummies marzipan sweet. Biscuit sesame snaps jelly danish donut cotton candy cake. Cupcake danish wafer cotton candy cotton candy marzipan tootsie roll brownie chocolate cake. Brownie cookie gingerbread cake cookie pudding tart jujubes. Jelly-o halvah oat cake sweet roll wafer tootsie roll muffin. Carrot cake sugar plum marzipan brownie pie danish dragée danish marzipan.

Soufflé topping shortbread lemon

## Horizontal Rule hr

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

## Blockquotes

> rbread. Cheesecake donut marzipan sweet roll icing muffin halvah. Dragée donut cake biscuit pie carrot cake sesame snaps jelly-o gummi bears. Cotton candy cookie croissant fruitcake.
> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other... erbread. Cheesecake donut marzipan sweet roll icing muffin halvah. Dragée donut cake biscuit pie carrot cake sesame snaps jelly-o gummi bears. Cotton candy cookie croissant fruitcake

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

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

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

`rel="noreferrer noopener"` and `target="_blank"` is added automatically to external links.

[link text](http://dev.nodeca.com)
[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica (enabled via linkify)

## Images

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')

### [Emojis](https://github.com/markdown-it/markdown-it-emoji)

Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
Shortcuts (emoticons): :-) :-( 8-) ;)

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].
Footnote 2 link[^second].
Inline footnote^[Text of inline footnote] definition.
Duplicated footnote reference[^second].

[^first]:
    Footnote **can have markup**
    and multiple paragraphs.

[^second]: Footnote text.

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

Todo: not working.,

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*[HTML]: Hyper Text Markup Language
