/**
 * Build a DTCG (Design Tokens Community Group) JSON file from the JEDEE
 * design tokens in `src/_data/designTokens/*.json`, ready to import into
 * the JEDEE - design tokens file on design.penpot.app.
 *
 * Workflow:
 *   1. Edit any file in src/_data/designTokens/
 *      (if you edited colorsBase.json, run `npm run colors` first to
 *      regenerate colors.json)
 *   2. Run `npm run penpot:tokens`
 *   3. In Penpot, open the design file → Tokens panel → import the
 *      generated `penpot-tokens.dtcg.json` at the repo root.
 *
 * Mapping rules:
 *   - JSON nesting becomes dot-separated token names (e.g. gray.100 → color.gray.100).
 *   - Fluid Utopia values { min, max } collapse to the max as "<n>px".
 *   - Border radii keep their rem strings (Penpot accepts unit-suffixed strings).
 *   - Bare numbers in viewports.json become "<n>px" dimension tokens.
 *   - The three light_dark colors (red, blue, green) are split:
 *       primary value   → theme/light
 *       .subdued value  → theme/dark
 *
 * Token type names use the plural form (`fontFamilies`, `fontSizes`, `fontWeights`)
 * because that is what the Penpot plugin API and Tokens Studio extension expect.
 * If a future Penpot importer rejects them, switch to the W3C singular forms.
 *
 * Theme membership note: Penpot's Plugin API `theme.addSet()` is silently no-op,
 * so we emit a Tokens Studio-style `$themes` block in the DTCG file and trust
 * the importer to wire it up. If themes still come in empty after import, set
 * their members manually in Penpot's Themes tab — the active sets are
 * documented in docs/penpot-tokens.md.
 */

import {readFile, writeFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const TOKENS_DIR = resolve(REPO_ROOT, 'src/_data/designTokens');
const OUTPUT_PATH = resolve(REPO_ROOT, 'penpot-tokens.dtcg.json');

// Top-level keys in colors.json that have a .subdued sibling and represent
// the light/dark semantic colors.
const LIGHT_DARK_COLOR_NAMES = ['red', 'blue', 'green'];

// Set order matters in Penpot: when the same token name exists in multiple
// active sets, the latter wins. theme/* must come last so it overrides core/*.
const CORE_SETS = ['core/colors', 'core/typography', 'core/spacing', 'core/layout'];
const SET_ORDER = [...CORE_SETS, 'theme/light', 'theme/dark'];

async function readJSON(file) {
	return JSON.parse(await readFile(resolve(TOKENS_DIR, file), 'utf8'));
}

function setLeaf(obj, dottedPath, value) {
	const parts = dottedPath.split('.');
	let cur = obj;
	for (let i = 0; i < parts.length - 1; i++) {
		cur[parts[i]] ??= {};
		cur = cur[parts[i]];
	}
	cur[parts.at(-1)] = value;
}

function token(value, type, description) {
	const t = {$value: value, $type: type};
	if (description) t.$description = description;
	return t;
}

function fluidMaxToPx(v) {
	if (v && typeof v === 'object' && 'max' in v) return `${v.max}px`;
	if (typeof v === 'number') return `${v}px`;
	return v;
}

async function build() {
	const [colors, fonts, spacing, textSizes, textLeading, textWeights, borderRadius, viewports, semanticColors] = await Promise.all([
		readJSON('colors.json'),
		readJSON('fonts.json'),
		readJSON('spacing.json'),
		readJSON('textSizes.json'),
		readJSON('textLeading.json'),
		readJSON('textWeights.json'),
		readJSON('borderRadius.json'),
		readJSON('viewports.json'),
		readJSON('semanticColors.json'),
	]);

	const out = {};

	// ---------- core/colors ----------
	const coreColors = {};
	for (const [topKey, val] of Object.entries(colors)) {
		if (topKey.startsWith('$')) continue;
		if (LIGHT_DARK_COLOR_NAMES.includes(topKey)) continue;

		if (val.$value !== undefined) {
			// e.g. base-darkest → color.base.darkest
			const [head, ...rest] = topKey.split('-');
			const path = rest.length ? `color.${head}.${rest.join('-')}` : `color.${topKey}`;
			setLeaf(coreColors, path, token(val.$value, 'color'));
		} else {
			// Nested palette: gray: { 100: { $value }, 200: { $value }, ... }
			for (const [shadeKey, shadeVal] of Object.entries(val)) {
				if (shadeVal?.$value !== undefined) {
					setLeaf(coreColors, `color.${topKey}.${shadeKey}`, token(shadeVal.$value, 'color'));
				}
			}
		}
	}
	out['core/colors'] = coreColors;

	// ---------- theme/light + theme/dark ----------
	const themeLight = {};
	const themeDark = {};
	for (const name of LIGHT_DARK_COLOR_NAMES) {
		const data = colors[name];
		if (!data) continue;
		if (data.$value) {
			setLeaf(themeLight, `color.semantic.${name}`, token(data.$value, 'color'));
		}
		if (data.subdued?.$value) {
			setLeaf(themeDark, `color.semantic.${name}`, token(data.subdued.$value, 'color'));
		}
	}
	// Semantic functional colors (bg, text, headline, etc.) — names mirror the
	// --color-* CSS variables. Values are references to palette tokens, kept in
	// sync via the {curly.brackets} DTCG reference syntax.
	const semanticType = semanticColors.$type ?? 'color';
	for (const [name, value] of Object.entries(semanticColors.themes?.light ?? {})) {
		setLeaf(themeLight, `color.${name}`, token(value, semanticType));
	}
	for (const [name, value] of Object.entries(semanticColors.themes?.dark ?? {})) {
		setLeaf(themeDark, `color.${name}`, token(value, semanticType));
	}
	out['theme/light'] = themeLight;
	out['theme/dark'] = themeDark;

	// ---------- core/typography ----------
	const coreTypo = {};
	for (const [k, v] of Object.entries(fonts)) {
		if (k.startsWith('$')) continue;
		setLeaf(coreTypo, `font.family.${k}`, token(v.$value, 'fontFamilies', v.$description));
	}
	for (const [k, v] of Object.entries(textWeights)) {
		if (k.startsWith('$')) continue;
		setLeaf(coreTypo, `font.weight.${k}`, token(v.$value, 'fontWeights'));
	}
	for (const [k, v] of Object.entries(textSizes)) {
		if (k.startsWith('$')) continue;
		setLeaf(coreTypo, `font.size.${k}`, token(fluidMaxToPx(v.$value), 'fontSizes'));
	}
	for (const [k, v] of Object.entries(textLeading)) {
		if (k.startsWith('$')) continue;
		setLeaf(coreTypo, `font.lineHeight.${k}`, token(String(v.$value), 'number'));
	}
	out['core/typography'] = coreTypo;

	// ---------- core/spacing ----------
	const coreSpacing = {};
	for (const [k, v] of Object.entries(spacing)) {
		if (k.startsWith('$')) continue;
		setLeaf(coreSpacing, `space.${k}`, token(fluidMaxToPx(v.$value), 'spacing'));
	}
	out['core/spacing'] = coreSpacing;

	// ---------- core/layout ----------
	const coreLayout = {};
	for (const [k, v] of Object.entries(borderRadius)) {
		if (k.startsWith('$')) continue;
		setLeaf(coreLayout, `radius.${k}`, token(v.$value, 'borderRadius'));
	}
	for (const [k, v] of Object.entries(viewports)) {
		if (typeof v !== 'number') continue; // skip title, description
		setLeaf(coreLayout, `breakpoint.${k}`, token(`${v}px`, 'dimension'));
	}
	out['core/layout'] = coreLayout;

	// ---------- $themes + $metadata (Tokens Studio convention) ----------
	const enabledCore = Object.fromEntries(CORE_SETS.map((s) => [s, 'enabled']));
	out.$themes = [
		{
			id: 'light',
			name: 'Light',
			selectedTokenSets: {...enabledCore, 'theme/light': 'enabled'},
		},
		{
			id: 'dark',
			name: 'Dark',
			selectedTokenSets: {...enabledCore, 'theme/dark': 'enabled'},
		},
	];
	out.$metadata = {tokenSetOrder: SET_ORDER};

	return out;
}

function countTokens(setObj) {
	let n = 0;
	(function walk(node) {
		if (!node || typeof node !== 'object') return;
		if ('$value' in node && '$type' in node) n++;
		else for (const v of Object.values(node)) walk(v);
	})(setObj);
	return n;
}

const dtcg = await build();
await writeFile(OUTPUT_PATH, JSON.stringify(dtcg, null, 2) + '\n', 'utf8');

const lines = SET_ORDER.map((name) => `  ${name.padEnd(20)} ${String(countTokens(dtcg[name])).padStart(3)} tokens`);
const total = SET_ORDER.reduce((sum, n) => sum + countTokens(dtcg[n]), 0);

console.log(`Wrote ${OUTPUT_PATH.replace(REPO_ROOT + '/', '')}\n`);
console.log('Set summary:');
console.log(lines.join('\n'));
console.log(`  ${''.padEnd(20)} ${'---'.padStart(3)}`);
console.log(`  ${'Total'.padEnd(20)} ${String(total).padStart(3)} tokens\n`);
console.log('Next: open JEDEE - design tokens in Penpot, Tokens panel → import → select the file above.');
