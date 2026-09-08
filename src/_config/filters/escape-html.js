/** Escape a string for safe use in HTML/XML text and double-quoted attributes. */
export const escapeHtml = value =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
