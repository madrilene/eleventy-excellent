export default {
  eleventyExcludeFromCollections: true,
  excludeFromSitemap: true,
  eleventyComputed: {
    permalink(data) {
      return data.meta.robots.generateLlmsTxt ? '/llms.txt' : false;
    }
  }
};
