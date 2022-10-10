const {outdent} = require('outdent');
const markdownLib = require('../../plugins/markdown');

// this is not working yet

const insertion = (img, figcaption, alt, children) => {
	if (!img) {
		throw new Error(`Must have an image-path.`);
	}
	if (!alt) {
		throw new Error('Images must have an alt text.');
	}
	if (!figcaption) {
		throw new Error('Must have a figcaption');
	}
	if (!children) {
		throw new Error('add a content.');
	}
	const content = markdownLib.render(children.trim());
	return outdent`<div class="switcher py-size-1 breakout">
  {% imagePlaceholder "./src/_assets/images/${img}", "bg-transparent pt-size-0", "
  h-full", "object-cover w-full h-max rounded-tr-2xl", "${figcaption}", "${alt}", "
  (max-width: 463px) 400px, (max-width: 718px) 700px, (max-width: 912px) 400px, 700px" %}
  <div class="font-display text-size-2 opacity-80">
  ${content}
  </div>
 </div>`;
};

module.exports = insertion;
