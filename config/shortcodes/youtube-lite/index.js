const liteYoutube = (id, label) => {
  return `
  <div class="youtube-embed"> <lite-youtube videoid="${id}" style="background-image: url('https://i.ytimg.com/vi/${id}/hqdefault.jpg');">
  <button type="button" class="lty-playbtn">
    <span class="lyt-visually-hidden">${label}</span>
  </button>
</lite-youtube></div>
    `;
};
module.exports = liteYoutube;
