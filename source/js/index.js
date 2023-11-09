import {openMenu, closeMenu} from './menu.js';
import {openMessage, closeMessage} from './form-button.js';
import {addLikes} from './likes.js';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    openMenu();
    closeMenu();
    openMessage();
    closeMessage();
  });
});

addLikes();

