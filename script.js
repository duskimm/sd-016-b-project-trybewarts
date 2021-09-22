// requisito 3 validação login e senha
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');

function validateLogin(event) {
  event.preventDefault();
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginBtn.addEventListener('click', validateLogin);
