'use strict';

const toggleCSSClass = (el, className) => {
  el.classList.contains(className)
    ? el.classList.remove(className)
    : el.classList.add(className);
};

const toggleCSSClassArray = (elArray, className) => {
  for (const el of elArray) {
    toggleCSSClass(el, className);
  }
};

/**
 * @return {void} activating Model.
 */
function activateModal() {
  // const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  const btnCloseModal = document.querySelector('.close-modal');
  const btnsShowModal = document.querySelectorAll('.show-modal');

  const toggleModal = () => {
    toggleCSSClassArray([modal, overlay], 'hidden');
  };

  /*
  body.addEventListener('click', (ev) => {
    const tagName = ev.target.tagName;
    const className = ev.target.className;
    console.log(tagName, className);
    if (tagName.toLowerCase() === 'button') {
      if (className === 'show-modal' || className === 'close-modal') {
        toggleModal();
      }
    }
  });
  */

  // This one or above ?
  for (let i = 0; i < btnsShowModal.length; i++) {
    // 2nd arg: a function /anonymous(no name)/
    // also it's a function expression, bcs
    // function (e) {...} produces a value, function value.
    btnsShowModal[i].addEventListener('click', toggleModal);
  }

  btnCloseModal.addEventListener('click', toggleModal);
}

activateModal();
