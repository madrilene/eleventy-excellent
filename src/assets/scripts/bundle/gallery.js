const buttons = document.querySelectorAll('button[data-index]');
const modals = document.querySelectorAll('dialog');
const closeButtons = document.querySelectorAll('dialog button');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].showModal();
  });
});
closeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].close();
  });
});
window.addEventListener('click', event => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
