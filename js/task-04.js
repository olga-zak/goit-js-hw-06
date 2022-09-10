'use strict';

let counterValue = 0;

const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const funDecrement = () => {
  value.innerHTML = counterValue -= 1;
};
buttonDecrementRef.addEventListener('click', funDecrement);

const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
const funIncrement = () => {
  value.innerHTML = counterValue += 1;
};
buttonIncrementRef.addEventListener('click', funIncrement);
