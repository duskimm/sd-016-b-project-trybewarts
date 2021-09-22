const inputEmail = document.getElementById('email');
const inputPasswd = document.getElementById('senha');
const botaoLogin = document.querySelector('.button');

function button() {
  if (inputEmail.value === 'tryber@teste.com' && inputPasswd.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function chamaButton() {
  botaoLogin.addEventListener('click', button);
}

window.onload = function init() {
  chamaButton();
};

// Caso o email seja "tryber@teste.com" e a senha seja "123456" será emitido um alerta contendo o texto "Olá, Tryber!"
// Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos."
