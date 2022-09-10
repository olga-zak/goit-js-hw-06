'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', event => {
  bodyEl.setAttribute('style', `background-color: ${getRandomHexColor()}`);
  const currentRandColor = bodyEl
    .getAttribute('style')
    .slice(18, bodyEl.getAttribute('style').length);
  spanEl.innerHTML = `${currentRandColor}`;
});
