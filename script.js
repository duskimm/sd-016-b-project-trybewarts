const submitButton = document.querySelector('#btn-entrar');
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

submitButton.addEventListener('click', validateLog);
