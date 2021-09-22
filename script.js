const loginButton = document.querySelector('button');
const login = document.querySelectorAll('input')[0];
const password = document.querySelectorAll('input')[1];
loginButton.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
