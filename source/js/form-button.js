const errorMessage = document.querySelector('.modal-error');
const submitButton = document.querySelector('.last-section__button');
const closeButton = document.querySelector('.ok-button');
const body = document.querySelector('body');

// const successMessage = document.querySelector('.modal-success');

const openMessage = () => {
  submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
  if(errorMessage.classList.contains('modal-closed')) {
    errorMessage.classList.remove('modal-closed');
    body.classList.add('modal-opened');
  }
  else {
    return
  }
}
)
}

const closeMessage = () => {
  closeButton.addEventListener('click', function () {
      errorMessage.classList.add('modal-closed');
      body.classList.remove('modal-opened');
    }
)
}

export {openMessage, closeMessage};



