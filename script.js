// utilities

function q(params) {
  return document.querySelector(params);
}

const email = q('#email');
const senha = q('#senha');
const entrar = q('#entrar');

function validateEmail(e) {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

entrar.addEventListener('click', validateEmail);
