/**
 * I strive to keep the `.eleventy.js` file clean and uncluttered. Most adjustments must be made in:
 *  - `src/config/collections.js`
 *  - `src/config/filters.js`
 *  - `src/config/plugins.js`
 *  - `src/config/shortcodes.js`
 *  - `src/config/transforms.js`
 * Based on https://github.com/AleksandrHovhannisyan.
 */

// module import filters
const {
  limit,
  toHtml,
  where,
  toISOString,
  formatDate,
  toAbsoluteUrl,
  stripHtml,
  minifyCss,
  mdInline
} = require('./config/filters/index.js');

// module import shortcodes
const {imageShortcodePlaceholder, liteYoutube} = require('./config/shortcodes/index.js');

// module import collections
const {getAllPosts} = require('./config/collections/index.js');

// module import transforms

// plugins
const markdownLib = require('./config/plugins/markdown.js');
const {EleventyRenderPlugin} = require('@11ty/eleventy');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const {slugifyString} = require('./config/utils');
const {escape} = require('lodash');

module.exports = eleventyConfig => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  // 	--------------------- Custom Watch Targets -----------------------
  eleventyConfig.addWatchTarget('./src/assets');
  eleventyConfig.addWatchTarget('./utils/*.js');

  // --------------------- layout aliases -----------------------
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('home', 'home.njk');
  eleventyConfig.addLayoutAlias('blog', 'blog.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // 	---------------------  Custom filters -----------------------
  eleventyConfig.addFilter('limit', limit);
  eleventyConfig.addFilter('where', where);
  eleventyConfig.addFilter('escape', escape);
  eleventyConfig.addFilter('toHtml', toHtml);
  eleventyConfig.addFilter('toIsoString', toISOString);
  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  eleventyConfig.addFilter('stripHtml', stripHtml);
  eleventyConfig.addFilter('slugify', slugifyString);
  eleventyConfig.addFilter('toJson', JSON.stringify);
  eleventyConfig.addFilter('fromJson', JSON.parse);
  eleventyConfig.addFilter('cssmin', minifyCss);
  eleventyConfig.addFilter('md', mdInline);
  eleventyConfig.addFilter('keys', Object.keys);
  eleventyConfig.addFilter('values', Object.values);
  eleventyConfig.addFilter('entries', Object.entries);

  // 	--------------------- Custom shortcodes ---------------------
  eleventyConfig.addNunjucksAsyncShortcode('imagePlaceholder', imageShortcodePlaceholder);
  eleventyConfig.addShortcode('youtube', liteYoutube);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`); // current year, stephanie eckles

  // 	--------------------- Custom transforms ---------------------

  // 	--------------------- Custom collections -----------------------
  eleventyConfig.addCollection('posts', getAllPosts);

  // 	--------------------- Plugins ---------------------
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary('md', markdownLib);

  // 	--------------------- Passthrough File Copy -----------------------

  // same path

  ['src/assets/fonts/', 'src/assets/images/'].forEach(path =>
    eleventyConfig.addPassthroughCopy(path)
  );

  // social images to root

  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/site.webmanifest': 'site.webmanifest'
  });
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/favicon.ico': 'favicon.ico'
  });
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/favicon.svg': 'favicon.svg'
  });
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/apple-touch-icon.png': 'apple-touch-icon.png'
  });
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/favicon-32x32.png': 'favicon-32x32.png'
  });
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/favicon-16x16.png': 'favicon-16x16.png'
  });
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/android-chrome-192x192.png': 'android-chrome-192x192.png'
  });
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/android-chrome-512x512.png': 'android-chrome-512x512.png'
  });
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/maskable.png': 'maskable.png'
  });

  // 	--------------------- Config -----------------------

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts'
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
