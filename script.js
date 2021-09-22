const submitButton = document.getElementById('btn-entrar');
const email = document.getElementById('email');
const password = document.getElementById('password');

function validateLog(event) {
  event.preventDefault();
  console.log(email.value);
  /*
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  */

}

submitButton.addEventListener('click', validateLog);

