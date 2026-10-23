// Loads the YouTube player only when someone presses play, so the page stays fast and sets no YouTube cookies before that.
document.querySelectorAll('.player[data-yt]').forEach((player) => {
  const button = player.querySelector('.play');
  if (!button) return;
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${player.dataset.yt}?autoplay=1&rel=0`;
    frame.title = player.dataset.title || 'YouTube player';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    player.replaceChildren(frame);
  });
});
