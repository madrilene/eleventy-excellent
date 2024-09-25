// © Manuel Matuzović: https://web.dev/website-navigation/ / Web Accessibility Cookbook

const nav = document.querySelector('nav');
const list = nav.querySelector('ul');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const button = burgerClone.querySelector('button');

button.addEventListener('click', e => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isOpen);
});

const disableMenu = () => {
  button.setAttribute('aria-expanded', false);
};

//  close on escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener('click', e => {
  const isClickInsideElement = nav.contains(e.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

// avoid drawer flashing on page load
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    list.removeAttribute('no-flash');
  }, 100);
});

nav.insertBefore(burgerClone, list);
