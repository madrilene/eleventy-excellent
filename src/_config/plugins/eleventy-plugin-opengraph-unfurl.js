// Using ES Module syntax for imports
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

// Sleep utility function to add a delay
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Normalizes a domain by removing the 'www.' prefix
function normalizeDomain(domain) {
  return domain.startsWith('www.') ? domain.substring(4) : domain;
}

// Cache directory
const cacheDir = '.cache/opengraph-unfurl';
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

async function getOpenGraphData(url) {
  const cacheKey = Buffer.from(url).toString('base64');
  const cacheFile = path.join(cacheDir, cacheKey);

  // Check cache first
  if (fs.existsSync(cacheFile)) {
    console.log(`[eleventy-plugin-opengraph-unfurl] Using cache for: ${url}`);
    return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  }

  // Add a random delay to avoid overwhelming the target server
  const delay = Math.floor(Math.random() * 500) + 100; // Random delay between 100ms and 600ms
  await sleep(delay);

  try {
    console.log(`[eleventy-plugin-opengraph-unfurl] Fetching data for: ${url}`);
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const meta = dom.window.document.head.querySelectorAll('meta');

    const ogData = {};
    meta.forEach(tag => {
      const property = tag.getAttribute('property');
      const content = tag.getAttribute('content');
      if (property && property.startsWith('og:')) {
        const key = property.substring(3);
        ogData[key] = content;
      }
    });

    // Write to cache
    fs.writeFileSync(cacheFile, JSON.stringify(ogData, null, 2));

    return ogData;
  } catch (error) {
    console.error(`[eleventy-plugin-opengraph-unfurl] Error fetching data for ${url}:`, error);
    return null;
  }
}

function renderOpenGraphUnfurlCard(data, url) {
  if (!data || !data.title) {
    return `<a href="${url}">${url}</a>`;
  }
  const image = data.image ? `<div class="opengraph-unfurl-card-image"><img src="${data.image}" alt="${data.title}"></div>` : '';
  const description = data.description ? `<p>${data.description}</p>` : '';

  return `
<div class="opengraph-unfurl-card">
  ${image}
  <div class="opengraph-unfurl-card-content">
    <h3 class="opengraph-unfurl-card-title"><a href="${url}">${data.title}</a></h3>
    ${description}
  </div>
</div>
  `.trim();
}

export default function(eleventyConfig, options = {}) {
  const { allowedDomains = [] } = options;

  eleventyConfig.addTransform('opengraph-unfurl', async function(content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      // Regex to find a standalone URL on its own line in markdown, rendered as HTML
      const regex = /<p>\s*<a\s+href="(https?:\/\/[^\s]+)".*?>.*?<\/a>\s*<\/p>/g;

      // Find all matches first, then process
      const matches = [...content.matchAll(regex)];

      if (matches.length > 0) {
        console.log(`[eleventy-plugin-opengraph-unfurl] Processing unfurls for: ${outputPath}`);
        console.log(`[eleventy-plugin-opengraph-unfurl] Found ${matches.length} links to unfurl.`);
        const ogDataList = [];

        // Process each match sequentially with a delay
        for (const match of matches) {
          const url = match[1];
          const domain = new URL(url).hostname;
          
          if (allowedDomains.includes(normalizeDomain(domain))) {
            const ogData = await getOpenGraphData(url);
            ogDataList.push(ogData);
          } else {
            console.log(`[eleventy-plugin-opengraph-unfurl] Skipping unfurl for ${url}. Domain not in allowed list.`);
            ogDataList.push(null);
          }
        }
        
        let i = 0;
        return content.replace(regex, () => {
          const ogData = ogDataList[i];
          const url = matches[i][1];
          i++;
          return renderOpenGraphUnfurlCard(ogData, url);
        });
      }
    }
    return content;
  });
};