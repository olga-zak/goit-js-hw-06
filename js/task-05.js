'use strict';

const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', event => {
  if (nameInputRef.value === '') {
    nameOutputRef.textContent = 'Anonymous';
  } else {
    nameOutputRef.textContent = event.currentTarget.value;
  }
});
