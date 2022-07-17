(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open-cream]'),
      closeMenuBtn: document.querySelector('[data-menu-close-cream]'),
      menu: document.querySelector('[data-menu-cream]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open-cream');
    }
  })();