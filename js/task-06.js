'use strict';

const inputEl = document.getElementById('validation-input'); //document.querySelector('#validation-input')

inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length < inputEl.dataset.length) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
});
