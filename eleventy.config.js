/**
 * Most adjustments must be made in `./src/_config/*`
 */

import path from "node:path";
import fs from "node:fs";

// NEW: Import JSDOM for the image transform
import { JSDOM } from 'jsdom';
// NEW: Import the async image shortcode
import { imageShortcode } from './src/_config/shortcodes/image.js';

// register dotenv for process.env.* variables to pickup
import dotenv from 'dotenv';
dotenv.config();

// add yaml support
import yaml from 'js-yaml';

//  config import
import {getAllPosts, showInSitemap, tagList} from './src/_config/collections.js';
import events from './src/_config/events.js';
import filters from './src/_config/filters.js';
import plugins from './src/_config/plugins.js';
import transforms from './src/_config/transforms.js';
import shortcodes from './src/_config/shortcodes.js';
import embedEverything from "eleventy-plugin-embed-everything";

export default async function (eleventyConfig) {

  // --------------------- setup persistent image cache

  eleventyConfig.addWatchTarget('./src/assets/**/*.{css,js,svg,png,jpeg}');
  eleventyConfig.addWatchTarget('./src/_includes/**/*.{webc}');

  // --------------------- Custom Transforms

  // Transforms
  Object.keys(transforms).forEach((transform) => {
    transforms[transform](eleventyConfig);
  });

  // --------------------- layout aliases
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');
  eleventyConfig.addLayoutAlias('tags', 'tags.njk');

  //	---------------------  Collections
  eleventyConfig.addCollection('allPosts', getAllPosts);
  eleventyConfig.addCollection('showInSitemap', showInSitemap);
  eleventyConfig.addCollection('tagList', tagList);

  // ---------------------  Plugins
  eleventyConfig.addPlugin(plugins.htmlConfig);
  eleventyConfig.addPlugin(plugins.cssConfig);
  eleventyConfig.addPlugin(plugins.jsConfig);
  eleventyConfig.addPlugin(plugins.drafts);
  eleventyConfig.addPlugin(embedEverything, {
    add: ['bluesky', 'mastodon', 'soundcloud'],
		mastodon: {
			options: {
				server: 'cuthrell.com',
			}
    }
  }); // <-- CORRECTED SYNTAX
    
  // Refactor the opengraph-unfurl plugin
  // eleventyConfig.addPlugin(plugins.opengraphUnfurl, {
  //  allowedDomains: ['techmeme.com', 'youtube.com', 'spotify.com', 'fudge.org', 'linkedin.com', 'nexustek.com', 'prnewswire.com', 'cnet.com', 'en.wikipedia.org', 'techcrunch.com', 'bsky.app', 'techfieldday.com', 'gartner.com', 'hot.fudge.org', 'techstrong.ai', 'newscientist.com', 'microsoft.com', 'theguardian.com', 'apnews.com', 'arstechnica.com', 'laughingsquid.com', 'sciencehistory.org', 'gizmodo.com', 'readwrite.com', 'theregister.com', 'zdnet.com', 'theverge.com', 'techradar.com', '9to5mac.com', '9to5google.com', 'venturebeat.com', 'thenextweb.com', 'bloomberg.com', 'cnbc.com', 'reuters.com', 'wsj.com', 'nytimes.com', 'washingtonpost.com', 'forbes.com', 'businessinsider.com', 'economist.com', 'time.com', 'wired.com', 'theatlantic.com', 'theinformation.com', 'protocol.com'],
  //  cacheDirectory: path.join('.cache', 'opengraph-unfurl')
  // });

  eleventyConfig.addTransform("unfurl", async function (content) {
    // Only run this transform on HTML pages
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
      return content;
    }

    // This regex finds a paragraph tag that ONLY contains a link
    // where the link's text is the same as its href.
    const LINK_IN_PARAGRAPH_REGEX = /<p><a href="(.+?)">\1<\/a><\/p>/g;

    // A function to build our card HTML
    const createCard = (data) => {
      return `
        <div class="unfurl-card" style="border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin: 16px 0; display: block; text-decoration: none; color: inherit;">
          <a href="${data.ogUrl}" target="_blank" rel="noopener noreferrer">
            ${data.ogImage ? `<img src="${data.ogImage.url}" alt="" style="max-width: 100%; border-radius: 4px;">` : ''}
            <strong style="display: block; font-size: 1.1em; margin-top: 8px;">${data.ogTitle || 'No Title'}</strong>
            <p style="font-size: 0.9em; color: #555;">${data.ogDescription || ''}</p>
            <small style="font-size: 0.8em; color: #777;">${new URL(data.ogUrl).hostname}</small>
          </a>
        </div>
      `;
    };

    // Find all matches and replace them
    const promises = [];
    content.replace(LINK_IN_PARAGRAPH_REGEX, (match, url) => {
      const promise = (async () => {
        const allUnfurls = this.ctx.unfurls; // Access the global data from _data/unfurls.js
        const unfurlData = allUnfurls[url];
        
        if (unfurlData) {
          const cardHtml = createCard(unfurlData);
          content = content.replace(match, cardHtml);
        }
      })();
      promises.push(promise);
    });

    await Promise.all(promises);
    return content;
  });

  eleventyConfig.addPlugin(plugins.EleventyRenderPlugin);
  eleventyConfig.addPlugin(plugins.rss);
  eleventyConfig.addPlugin(plugins.syntaxHighlight);

  eleventyConfig.addPlugin(plugins.webc, {
    components: ['./src/_includes/webc/*.webc'],
    useTransform: true
  });

  // NEW: Asynchronous Image Transform to process all images
  eleventyConfig.addTransform('processImages', async function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
      const dom = new JSDOM(content);
      const images = [...dom.window.document.querySelectorAll('img')];

      if (images.length === 0) {
        return content;
      }

      await Promise.all(
        images.map(async (img) => {
          if (img.parentElement.tagName.toLowerCase() === 'picture') {
            return;
          }
          
          const src = img.getAttribute('src');
          const alt = img.getAttribute('alt');
          const title = img.getAttribute('title'); // Used as caption
          
          if (src) {
            try {
              const pictureElement = await imageShortcode(src, alt, title);
              const pictureFragment = JSDOM.fragment(pictureElement);
              img.replaceWith(pictureFragment);
            } catch (e) {
              console.error(`Error processing image ${src}: ${e.message}`);
            }
          }
        })
      );
      return dom.serialize();
    }
    return content;
  });

  // ---------------------  bundle
  eleventyConfig.addBundle('css', {hoist: true});

  // 	--------------------- Library and Data
  eleventyConfig.setLibrary('md', plugins.markdownLib);
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));

  // --------------------- Filters
  eleventyConfig.addFilter('toIsoString', filters.toISOString);
  eleventyConfig.addFilter('formatDate', filters.formatDate);
  eleventyConfig.addFilter('markdownFormat', filters.markdownFormat);
  eleventyConfig.addFilter('splitlines', filters.splitlines);
  eleventyConfig.addFilter('striptags', filters.striptags);
  eleventyConfig.addFilter('shuffle', filters.shuffleArray);
  eleventyConfig.addFilter('alphabetic', filters.sortAlphabetically);
  eleventyConfig.addFilter('slugify', filters.slugifyString);

  // --------------------- Shortcodes
  eleventyConfig.addShortcode('svg', shortcodes.svgShortcode);
  // CHANGED: Use addAsyncShortcode for the image shortcode
  eleventyConfig.addAsyncShortcode('image', imageShortcode);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // --------------------- Make OG Images ---------------------
  eleventyConfig.on('eleventy.after', events.svgToJpeg);

  // --------------------- Persist the image cache

  eleventyConfig.on("eleventy.after", () => {
		fs.cpSync(".cache/images/", path.join(eleventyConfig.directories.output, "./dist/assets/images/"), {
			recursive: true
		});
	});

  // --------------------- Passthrough File Copy
  ['src/assets/fonts/', 'src/assets/images/template', 'src/assets/css', 'src/assets/og-images'].forEach(path =>
    eleventyConfig.addPassthroughCopy(path)
  );

  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/*': '/',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.{css,js}': 'assets/components/'
  });

  // --------------------- general config
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
}