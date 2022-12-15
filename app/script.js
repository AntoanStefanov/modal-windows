'use strict';

/**
 * @return {void} activating Model.
 */
function activateModal() {
  const body = document.querySelector('body');
  body.addEventListener('click', (ev) => {
    const className = ev.target.className;
    console.log(className);

    if (className === 'show-modal') {
      console.log('Modal for showing');
    } else if (className === 'close-modal') {
      console.log('Modal for closing');
    }
  });
}

activateModal();
