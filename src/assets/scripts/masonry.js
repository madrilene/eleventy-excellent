// ----- masonry fallback if CSS masonry not supported, solution by Ana Tudor: https://codepen.io/thebabydino/pen/yLYppjK

const supportMasonry = CSS.supports('grid-template-rows', 'masonry');

if (!supportMasonry) {
  let grids = [...document.querySelectorAll('.grid[data-rows="masonry"]')];

  if (grids.length && getComputedStyle(grids[0]).gridTemplateRows !== 'masonry') {
    grids = grids.map(grid => ({
      _el: grid,
      gap: parseFloat(getComputedStyle(grid).rowGap),
      items: [...grid.childNodes]
        .filter(c => c.nodeType === 1 && +getComputedStyle(c).gridColumnEnd !== -1)
        .map(c => ({_el: c})),
      ncol: 0
    }));

    function layout() {
      grids.forEach(grid => {
        let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length;
        if (grid.ncol !== ncol) {
          grid.ncol = ncol;
          grid.items.forEach(c => c._el.style.removeProperty('margin-block-start'));
          if (grid.ncol > 1) {
            grid.items.slice(ncol).forEach((c, i) => {
              let prev_fin = grid.items[i]._el.getBoundingClientRect().bottom,
                curr_ini = c._el.getBoundingClientRect().top;
              c._el.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`;
            });
          }
        }
      });
    }

    addEventListener(
      'load',
      e => {
        layout();
        addEventListener('resize', layout, false);
      },
      false
    );
  }
}
