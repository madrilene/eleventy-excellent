// Because Nunjucks's include doesn't like CSS with "{#". Source: https://github.com/nhoizey/pack11ty/blob/781248b92480701208f69e2161165e58d79a23ee/src/_11ty/shortcodes/include_raw.js

const fs = require('fs');

let memoizedIncludes = {};

const includeRaw = file => {
  if (file in memoizedIncludes) {
    return memoizedIncludes[file];
  } else {
    let content = fs.readFileSync(file, 'utf8');
    memoizedIncludes[file] = content;
    return content;
  }
};

module.exports = includeRaw;
