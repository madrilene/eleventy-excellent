// _data/unfurls.js
const EleventyFetch = require("@11ty/eleventy-fetch");
const ogs = require('open-graph-scraper');
const uniqueLinks = require('./unique_links.json');

const ALLOWED_DOMAINS = [
  'www.techmeme.com',
  'fudge.org',
  'www.nexustek.com',
  'www.prnewswire.com',
  'en.wikipedia.org',
  'www.youtube.com',
  'www.linkedin.com',
  // Add all other domains you trust here
];

async function fetchOpenGraphData(url) {
  // Use eleventy-fetch to cache the results
  const html = await EleventyFetch(url, {
    // --- THIS IS THE UPDATED LINE ---
    duration: "1y", // Cache for 1 year
    type: "buffer"
  });

  const { result } = await ogs({ html });
  return result;
}

module.exports = async function() {
  console.log("Fetching all unfurl data...");
  const unfurlData = {};
  
  const promises = uniqueLinks.map(async (url) => {
    try {
      const urlObject = new URL(url);
      if (!ALLOWED_DOMAINS.includes(urlObject.hostname)) {
        console.log(`Skipping disallowed domain: ${urlObject.hostname}`);
        return;
      }

      const data = await fetchOpenGraphData(url);
      if (data.success) {
        unfurlData[url] = data;
      }
    } catch (error) {
      console.error(`Error unfurling ${url}:`, error.message);
    }
  });

  await Promise.all(promises);
  
  console.log(`Successfully unfurled ${Object.keys(unfurlData).length} links.`);
  return unfurlData;
};