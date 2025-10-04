/**
 * Most adjustments must be made in `./src/_config/*`
 *
 * Hint VS Code for eleventyConfig autocompletion.
 * © Henry Desroches - https://gist.github.com/xdesro/69583b25d281d055cd12b144381123bf
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig -
 * @returns {Object} -
 */

import path from "node:path";
import fs from "node:fs";

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
import shortcodes from './src/_config/shortcodes.js';
import embedEverything from "eleventy-plugin-embed-everything";

export default async function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets/**/*.{css,js,svg,png,jpeg}');
  eleventyConfig.addWatchTarget('./src/_includes/**/*.{webc}');

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
    // directory: '.cache/embed-everything/',
    // duration: '1d',
    // Add the mandatory "server" value required for Mastodon.
		mastodon: {
			options: {
				server: 'cuthrell.com',
			}
    }
  });
    
// Add the opengraph-unfurl plugin
eleventyConfig.addPlugin(plugins.opengraphUnfurl, {
  allowedDomains: ['techmeme.com', 'youtube.com', 'open.spotify.com', 'fudge.org', 'linkedin.com', 'github.com', 'nexustek.com', 'prnewswire.com', 'brighttalk.com', 'cnet.com', 'en.wikipedia.org', 'twitter.com', 'techcrunch.com', 'bsky.app', 'finance.yahoo.com', 'techfieldday.com', 'tree.fm', 'infoq.com', 'docs.env0.com', 'gartner.com', 'hot.fudge.org', 'techstrong.ai', 'go.nexustek.com', 'danielwirtz.com', 'plaud.ai', 'limitless.ai', 'generalmills.com', 'commercial.allianz.com', 'newscientist.com', 'azure.microsoft.com', 'theguardian.com', 'apnews.com', 'arstechnica.com', 'laughingsquid.com', 'sciencehistory.org', 'gizmodo.com', 'morling.dev', 'ftisiot.net', 'readwrite.com', 'retool.com', 'blog.google', 'textql.webflow.io', 'generational.pub', 'airbyte.com', 'ascend.io', 'prefect.io', 'pecan.ai', 'dremio.com', 'polestarllp.com', 'montecarlodata.com', 'weka.io', 'featurebyte.com', 'prophecy.io', 'press.aboutamazon.com', 'mckinsey.com', 'snaplogic.com', 'datastax.com', 'regulations.gov', 'doi.org', 'eugeneyan.com', 'vulture.com', 'incolumitas.com', 'hola.com', 'complex.com', 'docs.datadome.co', 'zenrows.com', 'forrester.com', 'wonkeedonkeetools.co.uk', 'bain.com', 'rydoo.com', 'bessemervp.team', 'ebpf.foundation', 'iovisor.org', 'eunomia.dev', 'tigera.io', 'falco.org', 'bpfman.io', 'inspektor-gadget.io', 'sustainable-computing.io', 'accuknox.com', 'grafana.com', 'exein.io', 'px.dev', 'parca.dev', 'merbridge.io', 'l3af.io', 'energy.gov', 'convenience.org', 'aoghs.org', 'cnn.com', 'linkedin.github.io', 'finddataops.com', 'bizzabo.com', 'hpcwire.com', 'wired.com', 'reuters.com', 'oracle.com', 'sdxcentral.com', 'msspalert.com', 'techpolicy.press', 'hackaday.com', 'cncf.io', 'sentinelone.com', 'infracost.io', 'humanitec.com', 'sequoiacap.com', 'engineering.atspotify.com', 'speakerdeck.com', 'weave.works', 'kubernetes.io', 'fosdem.org', 'cuthrell.com', 'participate.sxsw.com', 'cloud.activepieces.com', 'flickr.com', 'eff.org', 'youtu.be', 'theonion.com', 'cowboystatedaily.com', 'theverge.com', 'businessinsider.com', 'm.youtube.com', 'events.futureb2b.com', 'virtualvacation.us', 'ebay.com', 'futurism.com', 'fortune.com', 'cbsnews.com', 'lanparty.house']
});
  
  eleventyConfig.addPlugin(plugins.EleventyRenderPlugin);
  eleventyConfig.addPlugin(plugins.rss);
  eleventyConfig.addPlugin(plugins.syntaxHighlight);

  eleventyConfig.addPlugin(plugins.webc, {
    components: ['./src/_includes/webc/*.webc'],
    useTransform: true
  });

  eleventyConfig.addPlugin(plugins.eleventyImageTransformPlugin, {
    
    outputDir: '.cache/@11ty/img/',
    formats: ['webp', 'jpeg'],
    widths: ['auto'],
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async',
        sizes: 'auto'
      },
      pictureAttributes: {}
    }
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
  eleventyConfig.addShortcode('image', shortcodes.imageShortcode);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // --------------------- Make OG Images ---------------------

  eleventyConfig.on('eleventy.after', events.svgToJpeg);

  // --------------------- Passthrough File Copy

  // -- same path
  ['src/assets/fonts/', 'src/assets/images/template', 'src/assets/css', 'src/assets/og-images'].forEach(path =>
    eleventyConfig.addPassthroughCopy(path)
  );

  eleventyConfig.addPassthroughCopy({
    // -- to root
    'src/assets/images/favicon/*': '/',

    // -- node_modules
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
