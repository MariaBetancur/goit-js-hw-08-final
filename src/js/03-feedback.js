const inputname = document.getElementById('inputname');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

// Cargar el valor guardado en el almacenamiento local al cargar la página
window.addEventListener('load', () => {
  const savedMessage = localStorage.getItem('message');
  if (savedMessage) {
    inputname.value = savedMessage;
    message.value = savedMessage;
  }
});

// Guardar el valor del campo de entrada en el almacenamiento local al hacer clic en el botón
submit.addEventListener('click', () => {
  const message = inputField.value;
  localStorage.setItem('message', 'feedback-form-state');
  alert('Información guardada en el almacenamiento local');
});
const updatePlaybackTime = () => {
  // Lógica para actualizar el tiempo de reproducción
};

const throttledUpdatePlaybackTime = throttle(updatePlaybackTime, 500);
