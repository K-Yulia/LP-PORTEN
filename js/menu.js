(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
   nav = refs.menu.classList.toggle('is-open');
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else { document.body.style.overflow = 'scroll' }
  }
})();

const refs = {
  burgerMenu: document.querySelector('.js-menu'),
  navList: document.querySelector('.js-nav'),
};

refs.navList.addEventListener('click', onListClick);

function onListClick(ev) {
  refs.burgerMenu.classList.remove('is-open');
  }