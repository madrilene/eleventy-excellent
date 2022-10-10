const markdownLib = require('../../plugins/markdown');
const outdent = require('outdent');

const aside = children => {
	if (!children) {
		throw new Error('You must provide a non-empty string for an aside.');
	}
	const content = markdownLib.renderInline(children);
	return `<aside class="post-aside">${outdent`${content}`}</aside>`;
};

module.exports = aside;
