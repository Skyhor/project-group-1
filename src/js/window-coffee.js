(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open-coffee]'),
      closeMenuBtn: document.querySelector('[data-menu-close-coffee]'),
      menu: document.querySelector('[data-menu-coffee'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open-coffee');
    }
  })();