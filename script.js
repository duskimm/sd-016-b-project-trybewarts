// Requisito 3 - identificando valores de input
// no email e senha

const inputEmail = document.querySelector('#email');
const inputPass = document.querySelector('#password');
const botaoEntrar = document.querySelector('#botaoEntrar');

function validarInput() {
  if (inputEmail.value !== 'tryber@teste.com' && inputPass.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

botaoEntrar.addEventListener('click', validarInput);

// Requisito 18
// dica tirada do site:
// https://thisinterestsme.com/disable-button-checkbox-checked/
const checkbox = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');
function checkEnable() {
  if (checkbox.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}
checkbox.addEventListener('click', checkEnable);
