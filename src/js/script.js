(function() {
  const naviContainer = document.querySelector('#js-navigationMenuContainer');
  const hamburgerBtn = document.querySelector('#js-hamburgerBtn');
  const scrollDownBtn = document.querySelector('#js-scrollDownBtn');

  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });

  scrollDownBtn.addEventListener('click', scrollDown);

  hamburgerBtn.addEventListener('click', function() {
    const ariaExpandedState = this.getAttribute('aria-expanded');
    if(ariaExpandedState === 'false') {
      this.setAttribute('aria-expanded', 'true');
    } else {
      this.setAttribute('aria-expanded', 'false');
    }

    naviContainer.classList.toggle('menu-container--open');
    if(!naviContainer.classList.contains('menu-container--open')) {
      this.blur();
    }
    toggleMenuIcon();
  })

  function toggleMenuIcon() {
    const menuLines = document.querySelectorAll('.hamburger__line');
     for(let i = 0; i < menuLines.length; i++) {
         menuLines[i].classList.toggle('hamburger__line' + (i + 1) + '--open')
     }
  }

  function scrollDown() {
    const mainPosition = document.querySelector('#js-main').offsetTop;
    const navHeight = document.querySelector('.js-nav').clientHeight;
    window.scrollTo(0, mainPosition - navHeight);
  }

})();