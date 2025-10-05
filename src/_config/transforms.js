// src/_config/transforms.js
export default {
  unfurl: (eleventyConfig) => {
    // The fix is to change "async function" to "function"
    eleventyConfig.addTransform("unfurl", function (content) {
      if (!this.page.inputPath.startsWith('./src/posts/') || !this.page.outputPath.endsWith(".html")) {
        return content;
      }

      // This is our more flexible regex that correctly finds the links
      const LINK_IN_PARAGRAPH_REGEX = /<p><a href="([^"]+)"[^>]*>[^<]+<\/a><\/p>/g;
      
      const matches = Array.from(content.matchAll(LINK_IN_PARAGRAPH_REGEX));

      if (matches.length === 0) {
        return content;
      }
      
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
        // This line will now work correctly
        const allUnfurls = this.ctx.unfurls; 
        const unfurlData = allUnfurls[url];
        
        if (unfurlData) {
          const cardHtml = createCard(unfurlData);
          processedContent = processedContent.replace(fullMatch, cardHtml);
        }
      }
      return processedContent;
    });
  },
};