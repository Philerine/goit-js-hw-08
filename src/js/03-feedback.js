import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormChange, 500));
form.addEventListener('submit', onFormSubmit);

saveDataForm();

function onFormChange() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function saveDataForm() {
  let savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
  }
}

