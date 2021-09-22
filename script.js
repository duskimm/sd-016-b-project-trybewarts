/* REQUISITO 3 */

const buttonEntrar = document.getElementById('botaoEntrar');
const inputLogin = document.getElementById('email');
const inputPassword = document.getElementById('password');

function login(event) {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', login);