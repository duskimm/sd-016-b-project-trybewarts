const sendButton = document.querySelector('#btn-entrar');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function validateLog(event) {
  event.preventDefault();
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

sendButton.addEventListener('click', validateLog);

const checkBox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

checkBox.addEventListener('click', () => {
  submitButton.disable = true;
});

/*
if (checkBox.checked === true) {
  submitButton.disable = false;
}
*/
