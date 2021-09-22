const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('senha');
const buttonEnter = document.getElementById('btn-entrar');

buttonEnter.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
