const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const button = document.getElementById('button-formulario');

function verificaFormulario() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', verificaFormulario);
