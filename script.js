// Constantes e variáveis globais
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formsbutton = document.querySelector('#login');

// Funções
// Alerta do email
function emailAlert() {
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
formsbutton.addEventListener('click', emailAlert);
