'use strict';

const addRemoveClass = (el, _class, toAdd = true) => {
  toAdd ? el.classList.add(_class) : el.classList.remove(_class);
};

/**
 * @return {void} activating Model.
 */
function activateModal() {
  const body = document.querySelector('body');

  body.addEventListener('click', (ev) => {
    const className = ev.target.className;
    const tagName = ev.target.tagName;

    if (tagName.toLowerCase() === 'button') {
      const modal = document.querySelector('.modal');
      const overlay = document.querySelector('.overlay');

      if (className === 'show-modal') {
        addRemoveClass(modal, 'hidden', false);
        addRemoveClass(overlay, 'hidden', false);
      } else if (className === 'close-modal') {
        addRemoveClass(modal, 'hidden');
        addRemoveClass(overlay, 'hidden');
      }
    }
  });
}

activateModal();
