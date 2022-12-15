'use strict';

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
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
      } else if (className === 'close-modal') {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
      }
    }
  });
}

activateModal();
