/**
 * Converts a DTCG token object into a flat array of {name, value, min, max, description}
 * items for use in Nunjucks templates (e.g. the styleguide).
 *
 * @param {object} dtcgObject - DTCG-formatted token group
 * @returns {array} [{name, value, min, max, description}]
 */
export const dtcgItems = dtcgObject => {
  const items = [];

  const traverse = (obj, prefix) => {
    for (const [key, node] of Object.entries(obj)) {
      if (key.startsWith('$')) continue;

      const name = prefix ? `${prefix} ${key}` : key;

      if (node.$value !== undefined) {
        const val = node.$value;
        const item = {name, description: node.$description || ''};

        if (typeof val === 'object' && val !== null && !Array.isArray(val) && 'min' in val) {
          item.min = val.min;
          item.max = val.max;
        } else {
          item.value = val;
        }

        items.push(item);
        traverse(node, name); // handle composite tokens (e.g. "red" + "red subdued")
      } else {
        traverse(node, name);
      }
    }
  };

  traverse(dtcgObject, '');
  return items;
};
