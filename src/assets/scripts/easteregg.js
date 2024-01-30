const eleventyCode = ['e', 'l', 'e', 'v', 'e', 'n', 't', 'y'];
const excellentCode = ['e', 'x', 'c', 'e', 'l', 'l', 'e', 'n', 't'];

let indexEleventy = 0;
let indexExcellent = 0;

// Trigger confetti if someone enters "eleventy" or "excellent"
document.addEventListener('keydown', event => {
  if (eleventyCode[indexEleventy] === event.key.toLowerCase()) {
    ++indexEleventy;
  } else {
    indexEleventy = 0;
  }

  if (excellentCode[indexExcellent] === event.key.toLowerCase()) {
    ++indexExcellent;
  } else {
    indexExcellent = 0;
  }

  if (indexEleventy === eleventyCode.length || indexExcellent === excellentCode.length) {
    console.log('Hooray Eleventy!');
    indexEleventy = 0;
    indexExcellent = 0;
    import('https://esm.run/canvas-confetti').then(module => {
      const confetti = module.default;
      const scalar = 4;
      const particleCount = 30;
      const star = confetti.shapeFromText({text: '⭐️', scalar});

      confetti({
        shapes: [star],
        scalar,
        particleCount
      });
    });
  }
});
