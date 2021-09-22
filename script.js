const formTrybewarts = document.getElementsByClassName('trybewarts-login')[0];
const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const buttonForm = document.getElementById('button-form');

function formValidade () {
  const inputEmailValue = inputEmail.value;
  const inputSenhaValue = inputSenha.value;
  if (inputEmailValue === 'tryber@teste.com' && inputSenhaValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonForm.addEventListener('click', formValidade);