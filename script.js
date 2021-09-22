// Requisito 3 - Login e senha
const loginInput = document.getElementById('inputLogin');
const passwordInput = document.getElementById('inputPassword');
const loginButton = document.getElementById('loginBtn');

function loginCheck() {
  loginButton.addEventListener('click', () => {
    if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
loginCheck();

// Requisito 18 - Condição para o checkbox

const checkButton = document.querySelector('#agreement');

function sendValidation() {
  checkButton.addEventListener('click', () => {
    const checkBox = document.getElementById('submit-btn');
    if (checkButton.checked === true) {
      checkBox.removeAttribute('disabled');
    } else {
      checkBox.setAttribute('disabled', 'disabled');
    }
  });
}
sendValidation();
