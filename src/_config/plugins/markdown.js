import markdownIt from 'markdown-it';
import markdownItPrism from 'markdown-it-prism';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItClass from '@toycode/markdown-it-class';
import markdownItLinkAttributes from 'markdown-it-link-attributes';
import {full as markdownItEmoji} from 'markdown-it-emoji';
import markdownItEleventyImg from 'markdown-it-eleventy-img';
import markdownItFootnote from 'markdown-it-footnote';
import markdownitMark from 'markdown-it-mark';
import markdownitAbbr from 'markdown-it-abbr';
import {slugifyString} from '../filters/slugify.js';
import path from 'node:path';

export const markdownLib = markdownIt({
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
