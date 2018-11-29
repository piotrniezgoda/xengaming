(function() {
  const naviContainer = document.querySelector('#navigationMenuContainer');
  const hamburgerBtn = document.querySelector('#hamburgerBtn');

  hamburgerBtn.addEventListener('click', () => {
    naviContainer.classList.toggle('menu-container--open');
  })
})();