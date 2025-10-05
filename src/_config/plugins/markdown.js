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
// 1. Import the SYNCHRONOUS image shortcode
import { imageShortcodeSync } from '../shortcodes/image.js';

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
  .use(md => {
       // 2. Modify your existing image rule
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      const src = token.attrGet('src');
      const alt = self.renderInlineAsText(token.children, options, env);
      const caption = token.attrGet('title');

      // Collect any other attributes from the markdown image syntax
      const attributes = token.attrs.reduce((acc, attr) => {
        acc[attr[0]] = attr[1];
        return acc;
      }, {});

      // Call the synchronous image shortcode to get the <picture> element
      const pictureElement = imageShortcodeSync(src, alt, attributes);

      // 3. Keep your custom <figure> and <figcaption> logic
      if (caption) {
        return `<figure>${pictureElement}<figcaption>${caption}</figcaption></figure>`;
      }
      return pictureElement;
    };
  });

export default markdownLib;