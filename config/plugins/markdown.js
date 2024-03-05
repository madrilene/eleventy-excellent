const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItClass = require('@toycode/markdown-it-class');
const markdownItLinkAttributes = require('markdown-it-link-attributes');
const markdownItEmoji = require('markdown-it-emoji').full;
const markdownItEleventyImg = require('markdown-it-eleventy-img');
const markdownItFootnote = require('markdown-it-footnote');
const markdownitMark = require('markdown-it-mark');
const markdownitAbbr = require('markdown-it-abbr');
const {slugifyString} = require('../utils');
const path = require('path');

const markdownLib = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})
  .disable('code')
  .use(markdownItPrism, {
    defaultLanguage: 'plaintext'
  })
  .use(markdownItAnchor, {
    slugify: slugifyString,
    tabIndex: false,
    permalink: markdownItAnchor.permalink.headerLink({
      class: 'heading-anchor'
    })
  })
  .use(markdownItClass, {
    ol: 'list',
    ul: 'list'
  })
  .use(markdownItLinkAttributes, [
    {
      // match external links
      matcher(href) {
        return href.match(/^https?:\/\//);
      },
      attrs: {
        rel: 'noopener'
      }
    }
  ])
  .use(markdownItEmoji)
  .use(markdownItEleventyImg, {
    imgOptions: {
      widths: [440, 880, 1024],
      urlPath: '/assets/images/',
      outputDir: './dist/assets/images/',
      formats: ['webp', 'jpeg']
    },
    globalAttributes: {
      loading: 'lazy',
      decoding: 'async',
      sizes: '90vw'
    },
    // prepend src for markdown images
    resolvePath: (filepath, env) => {
      return path.join('src', filepath);
    },
    renderImage(image, attributes) {
      const [Image, options] = image;
      const [src, attrs] = attributes;

      Image(src, options);

      const metadata = Image.statsSync(src, options);
      const imageMarkup = Image.generateHTML(metadata, attrs, {
        whitespaceMode: 'inline'
      });

      const imageElement = attrs.title
        ? `<figure class="flow">
			${imageMarkup}
					<figcaption>${attrs.title}</figcaption>
				</figure>`
        : `${imageMarkup}`;

      return imageElement;
    }
  })
  .use(markdownItFootnote)
  .use(markdownitMark)
  .use(markdownitAbbr);

module.exports = markdownLib;
