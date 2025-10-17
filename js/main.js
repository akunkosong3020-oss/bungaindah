
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('CANTIK YAA? JELAS DONG ').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    // Play romantic music when the title starts appearing
    const audio = document.getElementById('romantic-music');
    if (audio) {
      audio.play().catch(function(error) {
        console.log('Audio play failed:', error);
      });
    }

    clearTimeout(c);
  }, 1000);
};
