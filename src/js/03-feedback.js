const submit = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
  const outputObj = {};
  inputs.forEach(input => {
    outputObj[input.id] = input.value;
  });
  const outputJSON = Json.stringify(outputObj);
  document.getElementById('submit').textContent = submit;
});
const inputname = document.querySelectorAll('input');
inputname.forEach(input => {
  const savedValue = localStorage.getItem(input.id);
  if (savedValue) {
    input.value = savedValue;
  }
  input.addEventListener('input', () => {
    localStorage.setItem(input.id, 'feedback-form-state');
  });
});

// Guardar el valor del campo de entrada en el almacenamiento local al hacer clic en el botón
const message = document.getElementById('message');
submit.addEventListener('click', () => {
  const message = inputField.value;
  localStorage.setItem('message', 'feedback-form-state');
  alert('Información guardada en el almacenamiento local');
});
const updatePlaybackTime = () => {
  // Lógica para actualizar el tiempo de reproducción
};
const throttledUpdatePlaybackTime = throttle(updatePlaybackTime, 500);
