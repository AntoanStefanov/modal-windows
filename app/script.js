'use strict';

/**
 * @return {void} activating Model.
 */
function activateModal() {
  const body = document.querySelector('body');
  body.addEventListener('click', (ev) => {
    const className = ev.target.className;
    console.log(ev.target.tagName);
    console.log(className);

    if (className === 'show-modal') {
      console.log('Modal for showing');
      const hiddenModal = document.querySelector('.modal.hidden');
      hiddenModal.classList.remove('hidden');
      document.querySelector('.overlay').classList.remove('hidden');
    } else if (className === 'close-modal') {
      console.log('Modal for closing');
      const showedModal = document.querySelector('.modal');
      showedModal.classList.add('hidden');
      document.querySelector('.overlay').classList.add('hidden');
    }
  });
}

activateModal();
