const loginButton = document.getElementById('buttonLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginButton.addEventListener('click', function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
