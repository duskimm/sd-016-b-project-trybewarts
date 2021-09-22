const loginButton = document.querySelector('.loginBtn');
const emailUser = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');

loginButton.addEventListener('click', function () {
  const isValid = emailUser.value === 'tryber@teste.com' && userPassword.value === '123456' ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.');

  return isValid;
});
