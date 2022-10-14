/**
 * I strive to keep the `.eleventy.js` file clean and uncluttered. Most adjustments must be made in:
 *  - `src/config/collections.js`
 *  - `src/config/filters.js`
 *  - `src/config/plugins.js`
 *  - `src/config/shortcodes.js`
 *  - `src/config/transforms.js`
 */

// module import filters
const {
  wordCount,
  limit,
  sortByKey,
  toHtml,
  where,
  toISOString,
  formatDate,
  dividedBy,
  newlineToBr,
  toAbsoluteUrl,
  stripNewlines,
  stripHtml,
  getLatestCollectionItemDate,
  minifyCss,
  mdInline
} = require('./config/filters/index.js');

// module import shortcodes
const {
  asideShortcode,
  insertionShortcode,
  imageShortcode,
  imageShortcodePlaceholder,
  liteYoutube
} = require('./config/shortcodes/index.js');

// module import collections
const {getAllProjects} = require('./config/collections/index.js');

// module import transforms

// plugins
const markdownLib = require('./config/plugins/markdown.js');
const {EleventyRenderPlugin} = require('@11ty/eleventy');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const {slugifyString} = require('./config/utils');
const {escape} = require('lodash');
const pluginWebc = require('@11ty/eleventy-plugin-webc');

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
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // 	---------------------  Custom filters -----------------------
  eleventyConfig.addFilter('wordCount', wordCount);
  eleventyConfig.addFilter('limit', limit);
  eleventyConfig.addFilter('sortByKey', sortByKey);
  eleventyConfig.addFilter('where', where);
  eleventyConfig.addFilter('escape', escape);
  eleventyConfig.addFilter('toHtml', toHtml);
  eleventyConfig.addFilter('toIsoString', toISOString);
  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter('dividedBy', dividedBy);
  eleventyConfig.addFilter('newlineToBr', newlineToBr);
  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  eleventyConfig.addFilter('stripNewlines', stripNewlines);
  eleventyConfig.addFilter('stripHtml', stripHtml);
  eleventyConfig.addFilter('slugify', slugifyString);
  eleventyConfig.addFilter('toJson', JSON.stringify);
  eleventyConfig.addFilter('fromJson', JSON.parse);
  eleventyConfig.addFilter('getLatestCollectionItemDate', getLatestCollectionItemDate);
  eleventyConfig.addFilter('cssmin', minifyCss);
  eleventyConfig.addFilter('md', mdInline);
  eleventyConfig.addFilter('keys', Object.keys);
  eleventyConfig.addFilter('values', Object.values);
  eleventyConfig.addFilter('entries', Object.entries);

  // 	--------------------- Custom shortcodes ---------------------
  eleventyConfig.addPairedShortcode('aside', asideShortcode);
  eleventyConfig.addPairedShortcode('insertion', insertionShortcode);
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode('imagePlaceholder', imageShortcodePlaceholder);
  eleventyConfig.addShortcode('youtube', liteYoutube);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`); // current year, stephanie eckles

  // 	--------------------- Custom transforms ---------------------

  // 	--------------------- Custom collections -----------------------
  eleventyConfig.addCollection('projects', getAllProjects);

  // 	--------------------- Plugins ---------------------
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.addPlugin(pluginWebc, {
    components: 'src/_includes/webc/*.webc'
  });

  // 	--------------------- Passthrough File Copy -----------------------

  // node modules
  eleventyConfig.addPassthroughCopy({
    'node_modules/speedlify-score/speedlify-score.css': `assets/components/speedlify-score.css`,
    'node_modules/speedlify-score/speedlify-score.js': `assets/components/speedlify-score.js`,
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css': `assets/components/lite-yt-embed.css`,
    'node_modules/lite-youtube-embed/src/lite-yt-embed.js': `assets/components/lite-yt-embed.js`,
    'node_modules/artificial-chart/artificial-chart.css': `assets/components/artificial-chart.css`,
    'node_modules/artificial-chart/artificial-chart.js': `assets/components/artificial-chart.js`,
    'node_modules/@11ty/is-land/is-land.js': `assets/components/is-land.js`
  });

  eleventyConfig.addPassthroughCopy('src/assets/fonts/');
  eleventyConfig.addPassthroughCopy('src/assets/images/');

  // social icons von images zu root
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
