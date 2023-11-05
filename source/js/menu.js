const openButton = document.querySelector('.header__open-button');
const menu = document.querySelector('.main-menu');
const closeButton = document.querySelector('.header__close-button');

const openMenu = () => {
  openButton.addEventListener('click', function () {
    if(menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      closeButton.classList.remove('hidden');
      openButton.classList.add('hidden'); 
    }
    else {
      return
    }
  }
  )
}

const closeMenu = () => {
  closeButton.addEventListener('click', function () {
    if(!menu.classList.containes('hidden')) {
      menu.classList.add('hidden');
      closeButton.classList.add('hidden');
      openButton.classList.remove('hidden');
    }
    else {
      return
    }
    }
  )
}

export {openMenu};
export {closeMenu};
