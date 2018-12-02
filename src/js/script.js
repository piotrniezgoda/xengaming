(function() {
  const naviContainer = document.querySelector('#js-navigationMenuContainer');
  const hamburgerBtn = document.querySelector('#js-hamburgerBtn');

  hamburgerBtn.addEventListener('click', () => {
    naviContainer.classList.toggle('menu-container--open');
  })
})();