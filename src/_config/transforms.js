// src/_config/transforms.js
export default {
  unfurl: (eleventyConfig) => {
    eleventyConfig.addTransform("unfurl", async function (content) {
      // Only run on post markdown files that produce HTML
      if (!this.page.inputPath.startsWith('./src/posts/') || !this.page.outputPath.endsWith(".html")) {
        return content;
      }

      console.log(`\n[Unfurl Debug] Processing: ${this.page.inputPath}`);

      // This regex looks for a <p> tag that ONLY contains an <a> tag
      // where the link text is the same as the href. e.g. <p><a href="https://11ty.dev">https://11ty.dev</a></p>
      const LINK_IN_PARAGRAPH_REGEX = /<p><a href="(.+?)">\1<\/a><\/p>/g;
      
      const matches = Array.from(content.matchAll(LINK_IN_PARAGRAPH_REGEX));

      if (matches.length === 0) {
        console.log('[Unfurl Debug] No matches found with the current regex. Checking a small sample of the page HTML to see what might be different...');
        // We will log the first 1000 characters of any post that should have an unfurl
        // to see what the actual HTML looks like.
        console.log(content.substring(0, 1000));
        return content;
      }

      console.log(`[Unfurl Debug] Found ${matches.length} potential links to replace.`);
      
      const createCard = (data) => {
        return `
        <div class="unfurl-card">
          <a href="${data.ogUrl}" target="_blank" rel="noopener noreferrer">
            ${data.ogImage ? `<img src="${data.ogImage.url}" alt="">` : ''}
            <strong>${data.ogTitle || 'No Title'}</strong>
            <p>${data.ogDescription || ''}</p>
            <small>${new URL(data.ogUrl).hostname}</small>
          </a>
        </div>
        `;
      };

      let processedContent = content;
      for (const match of matches) {
        const [fullMatch, url] = match;
        const allUnfurls = this.ctx.unfurls;
        const unfurlData = allUnfurls[url];
        
        if (unfurlData) {
          console.log(`[Unfurl Debug] SUCCESS: Replacing link for ${url}`);
          const cardHtml = createCard(unfurlData);
          processedContent = processedContent.replace(fullMatch, cardHtml);
        } else {
          console.log(`[Unfurl Debug] INFO: Found a link for ${url}, but no unfurl data was fetched for it.`);
        }
      }
      return processedContent;
    });
  },
};