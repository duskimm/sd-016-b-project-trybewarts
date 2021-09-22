const emailTrybe = 'tryber@teste.com';
const passwordTrybe = '123456';
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', () => {
  if (inputEmail.value === emailTrybe && inputPassword.value === passwordTrybe) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
