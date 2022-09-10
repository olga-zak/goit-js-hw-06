'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

let firstBoxSize = 30;

inputEl.addEventListener('input', event => {
  inputEl.setAttribute('count', event.currentTarget.value);
});

const createBoxes = () => {
  let amountOfBoxes = Number(inputEl.getAttribute('count'));
  for (let i = 0; i < amountOfBoxes; i += 1) {
    firstBoxSize += 10;
    const newBox = document.createElement('div');
    newBox.style.background = getRandomHexColor();
    newBox.style.height = firstBoxSize + 'px';
    newBox.style.width = firstBoxSize + 'px';
    newBox.style.margin = '5px';
    newBox.classList.add('new-box');
    divBoxesEl.append(newBox);
    divBoxesEl.style.display = 'flex';
  }
};
createBtnEl.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  const allNewBoxes = document.querySelectorAll('.new-box');
  for (let allNewBox of allNewBoxes) {
    boxes.removeChild(allNewBox);
  }
  firstBoxSize = 30;
};

destroyBtnEl.addEventListener('click', destroyBoxes);
