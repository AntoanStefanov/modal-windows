'use strict';

const addRemoveClass = (el, _class, toAdd = true) => {
  toAdd ? el.classList.add(_class) : el.classList.remove(_class);
};

const addRemoveClassArray = (elArray, _class, toAdd = true) => {
  for (const el of elArray) {
    addRemoveClass(el, _class, toAdd);
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

  const showModal = () => {
    addRemoveClassArray([modal, overlay], 'hidden', false);
  };

  const hideModal = () => {
    addRemoveClassArray([modal, overlay], 'hidden');
  };
  /*
  body.addEventListener('click', (ev) => {
    const className = ev.target.className;
    const tagName = ev.target.tagName;

    if (tagName.toLowerCase() === 'button') {
      if (className === 'show-modal') {
        showModal();
      } else if (className === 'close-modal') {
        hideModal();
      }
    }
  });
  */

  // This one or above ?
  for (let i = 0; i < btnsShowModal.length; i++) {
    // 2nd arg: a function /anonymous(no name)/
    // also it's a function expression, bcs
    // function (e) {...} produces a value, function value.
    btnsShowModal[i].addEventListener('click', function (e) {
      showModal();
    });
  }

  btnCloseModal.addEventListener('click', (ev) => {
    hideModal();
  });
}

activateModal();
