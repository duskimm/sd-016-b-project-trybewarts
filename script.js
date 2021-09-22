const password = document.getElementById('password');
const email = document.getElementById('email');
const headerButton = document.getElementById('header-button');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}

headerButton.addEventListener('click', login);
