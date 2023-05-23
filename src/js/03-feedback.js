import throttle from 'lodash.throttle';

const FEEDBACK_FORM_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onSavingFormData, 500));
form.addEventListener('submit', onFormSubmit);
filledForm();

function onSavingFormData() {
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
}

function filledForm() {
  const storedFormData = localStorage.getItem(FEEDBACK_FORM_KEY);

  if (storedFormData) {
    const { email, message } = JSON.parse(storedFormData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  const emailInput = form.elements.email;
  const messageInput = form.elements.message;

  if (emailInput.value === '' || messageInput.value === '') {
    return console.log('Please fill in all fields!');
  }

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem(FEEDBACK_FORM_KEY);
  form.reset();
}
