let inputEmail = document.getElementById('#inputEmail');
let inputSenha = document.getElementById('#inputSenha');

function button() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  };
};

let buto = document.querySelector('.button');

function chamaButton() {
  botaoLogin.addEventListener('click', button);
};

window.onload = function init() {
  chamaButton();
};
