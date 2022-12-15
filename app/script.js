'use strict';

const toggleCSSClass = (el, className) => {
  el.classList.contains(className)
    ? el.classList.remove(className)
    : el.classList.add(className);
};

// this variable holds the function value :?
// -> variable + function value = function expression!
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

  const toggleModal = (event) => {
    toggleCSSClassArray([modal, overlay], 'hidden');
  };

  /* !uncomment body to work.
  body.addEventListener('click', (ev) => {
    const tagName = ev.target.tagName;
    const className = ev.target.className;
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
  overlay.addEventListener('click', toggleModal);

  // ESC key
  // Hey, JS call this function when a 'keydown' event happens,
  // and pass in the event object as an argument.
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#extra_properties_of_event_objects
  // https://developer.mozilla.org/en-US/docs/Web/API/Event
  document.addEventListener('keydown', function (event) {
    const keyName = event.key;
    // If one of the buttons are selected,
    // using 'space', 'enter' will trigger the PointerEvent,
    // IN SOME CASES, while clicking the button, it's selected Then that happens

    if (keyName === 'Escape' && !modal.classList.contains('hidden')) {
      // add() -> Adds all arguments passed, except those already present.
      // modal.classList.add('hidden');
      // overlay.classList.add('hidden');
      // So, I don't see point of checking with '.contains()' ?
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  });
}

activateModal();
