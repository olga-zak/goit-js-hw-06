'use strict';

const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inputEl.addEventListener('input', event => {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
