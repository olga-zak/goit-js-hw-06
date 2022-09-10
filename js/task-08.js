'use strict';

const form = document.querySelector('.login-form');
const emailLabel = form.firstElementChild;
const passwordLabel = emailLabel.nextElementSibling;

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const filledData = {};
  filledData[emailLabel.outerText] = email.value;
  filledData[passwordLabel.outerText] = password.value;
  console.log(filledData);

  event.currentTarget.reset();
});
