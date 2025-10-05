import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItPrism from 'markdown-it-prism';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItClass from '@toycode/markdown-it-class';
import markdownItLinkAttributes from 'markdown-it-link-attributes';
import {full as markdownItEmoji} from 'markdown-it-emoji';
import markdownItFootnote from 'markdown-it-footnote';
import markdownitMark from 'markdown-it-mark';
import markdownitAbbr from 'markdown-it-abbr';
import {slugifyString} from '../filters/slugify.js';

export const markdownLib = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})
  .disable('code')
  .use(markdownItAttrs)
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
  .use(markdownItClass, {})
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
  .use(markdownItFootnote)
  .use(markdownitMark)
  .use(markdownitAbbr)

  markdownLib.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet('src');
    const alt = self.renderInlineAsText(token.children, options, env);
    const caption = token.attrGet('title');

     // Create a standard <img> tag. The transform will replace this.
  let attrs = `src="${src}" alt="${alt}"`;
  if (caption) {
    attrs += ` title="${caption}"`;
  }
  return `<img ${attrs}>`;

      // Collect any other attributes from the markdown image syntax
      const attributes = token.attrs.reduce((acc, attr) => {
        acc[attr[0]] = attr[1];
        return acc;
      }, {});

      if (caption) {
        return `<figure>${pictureElement}<figcaption>${caption}</figcaption></figure>`;
      }
      return pictureElement;
    };
  });

export default markdownLib;