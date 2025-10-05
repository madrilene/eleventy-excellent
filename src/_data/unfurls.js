import EleventyFetch from "@11ty/eleventy-fetch";
import ogs from 'open-graph-scraper';
// This import path assumes `unique_links.json` is in the same `src/_data` directory
import uniqueLinks from './unique_links.json' assert { type: "json" };

const ALLOWED_DOMAINS = [
	'fudge.org',
	'hot.fudge.org',
	'www.theverge.com',
	'www.youtube.com',
  'www.techmeme.com',
  'fudge.org',
  'www.nexustek.com',
  'en.wikipedia.org',
];

async function fetchOpenGraphData(url) {
  try {
    const html = await EleventyFetch(url, {
      duration: "1y",
      type: "buffer"
    });
    const { result } = await ogs({ html });
    return result;
  } catch(e) {
    console.error(`[unfurls.js] Error fetching OpenGraph data for ${url}:`, e.message);
    return null;
  }
}

export default async function() {
  console.log("Fetching all unfurl data...");
  const unfurlData = {};
  
  const promises = uniqueLinks.map(async (url) => {
    try {
      const urlObject = new URL(url);
      if (!ALLOWED_DOMAINS.includes(urlObject.hostname)) {
        return;
      }
      const data = await fetchOpenGraphData(url);
      if (data && data.success) {
        unfurlData[url] = data;
      }
    } catch (error) {
      console.error(`[unfurls.js] Error processing URL ${url}:`, error.message);
    }
  });

  await Promise.all(promises);
  console.log(`Successfully unfurled ${Object.keys(unfurlData).length} links.`);
  return unfurlData;
};