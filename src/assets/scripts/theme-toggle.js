const storageKey = 'theme-preference';

// get labels from meta
const lightLabel = '{{ meta.themeSwitch.light }}';
const darkLabel = '{{ meta.themeSwitch.dark }}';

const onClick = () => {
  // flip current value
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.querySelector('[theme-toggle]').querySelector('span').innerHTML =
    theme.value === 'light' ? lightLabel : darkLabel;
  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute('data-theme', theme.value);

  // themeToggle.querySelector('span').innerHTML =
  // 	theme.value === 'light' ? lightLabel : darkLabel;
};

const theme = {
  value: getColorPreference()
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  const themeToggle = document.querySelector('[theme-toggle]');
  const switcher = document.querySelector('[data-theme-switcher]');

  if (!switcher) {
    return;
  }

  switcher.removeAttribute('hidden');

  reflectPreference();

  themeToggle.addEventListener('click', onClick);
  themeToggle.querySelector('span').innerHTML =
    theme.value === 'light' ? lightLabel : darkLabel;
};

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches: isDark}) => {
    theme.value = isDark ? 'dark' : 'light';
    setPreference();
  });
