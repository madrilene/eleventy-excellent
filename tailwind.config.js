/* © Andy Bell - https://github.com/Set-Creative-Studio/cube-boilerplate */

import postcss from 'postcss';
import postcssJs from 'postcss-js';
import plugin from 'tailwindcss/plugin';

import {clampGenerator} from './src/_config/utils/clamp-generator.js';
import {tokensToTailwind} from './src/_config/utils/tokens-to-tailwind.js';

// Raw design tokens
import borderRadiusTokens from './src/_data/designTokens/borderRadius.json';
import colorTokens from './src/_data/designTokens/colors.json';
import fontTokens from './src/_data/designTokens/fonts.json';
import spacingTokens from './src/_data/designTokens/spacing.json';
import textLeadingTokens from './src/_data/designTokens/textLeading.json';
import textSizeTokens from './src/_data/designTokens/textSizes.json';
import textWeightTokens from './src/_data/designTokens/textWeights.json';
import viewportTokens from './src/_data/designTokens/viewports.json';

const tokenPrefixes = {
  colors: colorTokens.prefix ?? 'color',
  borderRadius: borderRadiusTokens.prefix ?? 'border-radius',
  spacing: spacingTokens.prefix ?? 'space',
  fontSize: textSizeTokens.prefix ?? 'size',
  lineHeight: textLeadingTokens.prefix ?? 'leading',
  fontFamily: fontTokens.prefix ?? 'font',
  fontWeight: textWeightTokens.prefix ?? 'font'
};

const tokenColors = tokensToTailwind(colorTokens.items);
const semanticColors = {
  'theme-light': 'var(--color-light)',
  'theme-dark': 'var(--color-dark)',
  'theme-mid': 'var(--color-mid)',
  'theme-text': 'var(--color-text)',
  'theme-text-accent': 'var(--color-text-accent)',
  'theme-bg': 'var(--color-bg)',
  'theme-bg-accent': 'var(--color-bg-accent)',
  'theme-primary': 'var(--color-primary)',
  'theme-secondary': 'var(--color-secondary)',
  'theme-tertiary': 'var(--color-tertiary)'
};

// Process design tokens
const colors = {...tokenColors, ...semanticColors};
const borderRadius = tokensToTailwind(borderRadiusTokens.items);
const fontFamily = tokensToTailwind(fontTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
const fontWeight = tokensToTailwind(textWeightTokens.items);
const lineHeight = tokensToTailwind(textLeadingTokens.items);
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

export default {
  content: ['./src/**/*.{html,js,md,njk,liquid,webc}'],
  presets: [],
  theme: {
    screens: {
      ltsm: {max: `${viewportTokens.sm}px`},
      sm: `${viewportTokens.sm}px`,
      md: `${viewportTokens.md}px`,
      ltnavigation: {max: `${viewportTokens.navigation}px`},
      navigation: `${viewportTokens.navigation}px`
    },
    colors,
    borderRadius,
    spacing,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    backgroundColor: ({theme}) => theme('colors'),
    textColor: ({theme}) => theme('colors'),
    margin: ({theme}) => ({
      auto: 'auto',
      ...theme('spacing')
    }),
    padding: ({theme}) => theme('spacing')
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],

  // Disables Tailwind's reset etc
  corePlugins: {
    preflight: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false
  },

  // Prevents Tailwind's core components
  blocklist: ['container'],

  // Prevents Tailwind from generating that wall of empty custom properties
  experimental: {
    optimizeUniversalDefaults: true
  },

  plugins: [
    // Generates custom property values from tailwind config
    plugin(function ({addComponents, config}) {
      let result = '';

      const currentConfig = config();

      const groups = [
        {key: 'colors', prefix: tokenPrefixes.colors},
        {key: 'borderRadius', prefix: tokenPrefixes.borderRadius},
        {key: 'spacing', prefix: tokenPrefixes.spacing},
        {key: 'fontSize', prefix: tokenPrefixes.fontSize},
        {key: 'lineHeight', prefix: tokenPrefixes.lineHeight},
        {key: 'fontFamily', prefix: tokenPrefixes.fontFamily},
        {key: 'fontWeight', prefix: tokenPrefixes.fontWeight}
      ];

      groups.forEach(({key, prefix}) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          result += `--${prefix}-${key}: ${group[key]};`;
        });
      });

      addComponents({
        ':root': postcssJs.objectify(postcss.parse(result))
      });
    }),

    // Generates custom utility classes
    plugin(function ({addUtilities, config}) {
      const currentConfig = config();
      const customUtilities = [
        {
          key: 'spacing',
          prefix: `flow-${tokenPrefixes.spacing}`,
          property: '--flow-space'
        },
        {
          key: 'spacing',
          prefix: `region-${tokenPrefixes.spacing}`,
          property: '--region-space'
        },
        {
          key: 'spacing',
          prefix: 'gutter',
          property: '--gutter'
        },
        {
          key: 'colors',
          prefix: `spot-${tokenPrefixes.colors}`,
          property: '--spot-color'
        }
      ];

      customUtilities.forEach(({key, prefix, property}) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          addUtilities({
            [`.${prefix}-${key}`]: postcssJs.objectify(postcss.parse(`${property}: ${group[key]}`))
          });
        });
      });
    })
  ]
};
