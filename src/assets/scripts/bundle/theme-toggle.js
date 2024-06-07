const storageKey = 'theme-preference';
const lightLabel = '{{ meta.themeSwitch.light }}';
const darkLabel = '{{ meta.themeSwitch.dark }}';
const themeColors = {
  dark: '{{ designTokens.colors.items[0].value }}', // Base Dark
  light: '{{ designTokens.colors.items[1].value }}' // Base Light
};

const theme = {
  value: getColorPreference()
};

window.onload = () => {
  const lightThemeToggle = document.querySelector('#light-theme-toggle');
  const darkThemeToggle = document.querySelector('#dark-theme-toggle');
  const switcher = document.querySelector('[data-theme-switcher]');

  if (!switcher) {
    return;
  }

  reflectPreference();

  lightThemeToggle.addEventListener('click', () => onClick('light'));
  darkThemeToggle.addEventListener('click', () => onClick('dark'));

  lightThemeToggle.setAttribute('aria-pressed', theme.value === 'light');
  darkThemeToggle.setAttribute('aria-pressed', theme.value === 'dark');
};

// sync with system changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches: isDark}) => {
  theme.value = isDark ? 'dark' : 'light';
  setPreference();
});

function onClick(themeValue) {
  theme.value = themeValue;
  document.querySelector('#light-theme-toggle').setAttribute('aria-pressed', themeValue === 'light');
  document.querySelector('#dark-theme-toggle').setAttribute('aria-pressed', themeValue === 'dark');
  setPreference();
}

function getColorPreference() {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', theme.value);
  document.querySelector('#light-theme-toggle')?.setAttribute('aria-label', lightLabel);
  document.querySelector('#dark-theme-toggle')?.setAttribute('aria-label', darkLabel);
  // adjust the theme color
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute('content', theme.value === 'dark' ? themeColors.dark : themeColors.light);
}

// set early so no page flashes / CSS is made aware
reflectPreference();
