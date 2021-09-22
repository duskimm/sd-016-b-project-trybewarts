const btnSubmit = document.getElementById('btn-submit');
const inputLogin = document.querySelectorAll('input');
const agreement = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

function login() {
  if (inputLogin[0].value === 'tryber@teste.com' && inputLogin[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function disableButton() {
  if (agreement.checked === false) {
    sendButton.disabled = true;
  }
}

function activeButton() {
  if (agreement.checked === true) {
    sendButton.disabled = false;
  }
  if (agreement.checked === false) {
    sendButton.disabled = true;
  }
}

btnSubmit.addEventListener('click', login);
agreement.addEventListener('click', activeButton);

window.onload = function start() {
  disableButton();
};
