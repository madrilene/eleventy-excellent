import { promises as fs } from 'fs';
import path from 'path';
import EleventyFetch from "@11ty/eleventy-fetch";
import ogs from 'open-graph-scraper';
import uniqueLinks from './unique_links.json' with { type: "json" };

const CACHE_PATH = path.join(process.cwd(), '.cache/unfurls.json');

const ALLOWED_DOMAINS = [
	'fudge.org', 'hot.fudge.org', 'www.theverge.com', 'www.youtube.com',
    'www.techmeme.com', 'www.nexustek.com', 'en.wikipedia.org',
];

// Helper function to create a delay
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchOpenGraphData(url) {
  try {
    const html = await EleventyFetch(url, { duration: "1y", type: "buffer" });
    const { result } = await ogs({ html });
    return result;
  } catch(e) {
    console.error(`[unfurls.js] Error fetching OG data for ${url}:`, e.message);
    return null;
  }
}

export default async function() {
  console.log(`Fetching unfurl data for ${uniqueLinks.length} links...`);
  const unfurlData = {};
  
  // --- This is the updated section ---
  // We replace Promise.all with a sequential for...of loop
  let count = 0;
  for (const url of uniqueLinks) {
    count++;
    console.log(`[${count}/${uniqueLinks.length}] Processing: ${url}`);
    try {
      const urlObject = new URL(url);
      if (!ALLOWED_DOMAINS.includes(urlObject.hostname)) continue;

      const data = await fetchOpenGraphData(url);
      if (data && data.success) {
        unfurlData[url] = data;
      }
      // Wait for 200 milliseconds before the next request to be polite
      await wait(200); 
    } catch (error) {
      console.error(`[unfurls.js] Error processing URL ${url}:`, error.message);
    }
  }
  // --- End of updated section ---

  await fs.mkdir(path.dirname(CACHE_PATH), { recursive: true });
  await fs.writeFile(CACHE_PATH, JSON.stringify(unfurlData, null, 2));

  console.log(`Successfully unfurled and cached ${Object.keys(unfurlData).length} links.`);
  return unfurlData;
};