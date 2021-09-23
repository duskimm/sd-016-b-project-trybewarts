const email = document.getElementById('email');
const password = document.getElementById('password');

function validateLogin() {
  const emailCorrect = 'tryber@teste.com';
  const passwordCorrect = '123456';
  if ((email.value === emailCorrect) && (password.value === passwordCorrect)) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

window.onload = function () {
  const btnLogin = document.getElementById('login');
  btnLogin.addEventListener('click', validateLogin);
};
