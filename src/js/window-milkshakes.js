(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open-milkshakes]'),
      closeMenuBtn: document.querySelector('[data-menu-close-milkshakes]'),
      menu: document.querySelector('[data-menu-milkshakes'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open-milkshakes');
    }
  })();