const inputEmail = document.getElementById('inputEmail');
const inputSenha = document.getElementById('inputSenha');

function button(evento) {
  evento.preventDefault();
  if ((inputEmail.value === 'tryber@teste.com') && (inputSenha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const botaoLogin = document.querySelector('.button');

function chamaButton() {
  botaoLogin.addEventListener('click', button);
}

window.onload = () => {
  chamaButton();
};
