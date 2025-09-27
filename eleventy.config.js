/**
 * Most adjustments must be made in `./src/_config/*`
 *
 * Hint VS Code for eleventyConfig autocompletion.
 * © Henry Desroches - https://gist.github.com/xdesro/69583b25d281d055cd12b144381123bf
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig -
 * @returns {Object} -
 */

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
    // Add the mandatory "server" value required for Mastodon.
		mastodon: {
			options: {
				server: 'cuthrell.com',
			}
    }
  });
    
  // Add the opengraph-unfurl plugin
eleventyConfig.addPlugin(plugins.opengraphUnfurl, {
  allowedDomains: ['www.techmeme.com', 'www.youtube.com', 'open.spotify.com', 'fudge.org', 'www.linkedin.com', 'github.com', 'www.nexustek.com', 'www.prnewswire.com', 'www.brighttalk.com', 'www.cnet.com', 'en.wikipedia.org', 'twitter.com', 'techcrunch.com', 'bsky.app', 'finance.yahoo.com', 'techfieldday.com', 'www.infoq.com', 'youtube.com', 'docs.env0.com', 'www.gartner.com', 'hot.fudge.org', 'techstrong.ai', 'go.nexustek.com', 'danielwirtz.com', 'www.plaud.ai', 'www.limitless.ai', 'www.generalmills.com', 'commercial.allianz.com', 'www.newscientist.com', 'azure.microsoft.com', 'www.theguardian.com', 'apnews.com', 'arstechnica.com', 'tree.fm', 'laughingsquid.com', 'www.sciencehistory.org', 'gizmodo.com', 'www.morling.dev', 'ftisiot.net', 'readwrite.com', 'retool.com', 'blog.google', 'textql.webflow.io', 'www.generational.pub', 'airbyte.com', 'www.ascend.io', 'www.prefect.io', 'www.pecan.ai', 'www.dremio.com', 'www.polestarllp.com', 'www.montecarlodata.com', 'www.weka.io', 'featurebyte.com', 'www.prophecy.io', 'press.aboutamazon.com', 'www.mckinsey.com', 'www.snaplogic.com', 'www.datastax.com', 'www.regulations.gov', 'doi.org', 'eugeneyan.com', 'www.vulture.com', 'incolumitas.com', 'www.hola.com', 'www.complex.com', 'docs.datadome.co', 'www.zenrows.com', 'www.forrester.com', 'www.wonkeedonkeetools.co.uk', 'www.bain.com', 'www.rydoo.com', 'bessemervp.team', 'ebpf.foundation', 'www.iovisor.org', 'eunomia.dev', 'www.tigera.io', 'falco.org', 'bpfman.io', 'www.inspektor-gadget.io', 'sustainable-computing.io', 'www.accuknox.com', 'grafana.com', 'exein.io', 'px.dev', 'www.parca.dev', 'merbridge.io', 'l3af.io', 'www.energy.gov', 'www.convenience.org', 'aoghs.org', 'www.cnn.com', 'linkedin.github.io', 'www.finddataops.com', 'www.bizzabo.com', 'www.hpcwire.com', 'www.wired.com', 'www.reuters.com', 'www.oracle.com', 'www.sdxcentral.com', 'www.msspalert.com', 'www.techpolicy.press', 'hackaday.com', 'www.cncf.io', 'www.sentinelone.com', 'www.infracost.io', 'humanitec.com', 'www.sequoiacap.com', 'engineering.atspotify.com', 'speakerdeck.com', 'www.weave.works', 'kubernetes.io', 'fosdem.org', 'cuthrell.com', 'participate.sxsw.com', 'cloud.activepieces.com', 'www.flickr.com', 'www.eff.org', 'youtu.be', 'theonion.com', 'cowboystatedaily.com', 'www.theverge.com', 'www.tree.fm', 'www.businessinsider.com', 'm.youtube.com', 'events.futureb2b.com', 'virtualvacation.us', 'www.ebay.com', 'futurism.com', 'fortune.com', 'www.cbsnews.com', 'lanparty.house']
});
  
  eleventyConfig.addPlugin(plugins.EleventyRenderPlugin);
  eleventyConfig.addPlugin(plugins.rss);
  eleventyConfig.addPlugin(plugins.syntaxHighlight);

  eleventyConfig.addPlugin(plugins.webc, {
    components: ['./src/_includes/webc/*.webc'],
    useTransform: true
  });

  eleventyConfig.addPlugin(plugins.eleventyImageTransformPlugin, {
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
