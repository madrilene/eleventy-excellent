// Eleventy
import {EleventyRenderPlugin} from '@11ty/eleventy';
import rss from '@11ty/eleventy-plugin-rss';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import webc from '@11ty/eleventy-plugin-webc';
import {eleventyImageTransformPlugin} from '@11ty/eleventy-img';
import { cpSync } from "node:fs";

// custom
import {markdownLib} from './plugins/markdown.js';
import {drafts} from './plugins/drafts.js';
//import opengraphUnfurl from './plugins/eleventy-plugin-opengraph-unfurl.js';

// Custom transforms
import {htmlConfig} from './plugins/html-config.js';

// Custom template language
import {cssConfig} from './plugins/css-config.js';
import {jsConfig} from './plugins/js-config.js';

export default {
  EleventyRenderPlugin,
  rss,
  syntaxHighlight,
  webc,
  eleventyImageTransformPlugin,
  markdownLib,
  opengraphUnfurl,
  drafts,
  htmlConfig,
  cssConfig,
  jsConfig
};
