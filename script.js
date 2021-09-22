<<<<<<< HEAD
const loginButton = document.querySelector('.loginBtn');
const emailUser = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');

loginButton.addEventListener('click', function () {
  const isValid = emailUser.value === 'tryber@teste.com' && userPassword.value === '123456' ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.');

  return isValid;
});
=======
let loginButton = document.querySelector('.loginBtn');
let emailUser = document.querySelector('.user-email');
let userPassword = document.querySelector('.user-password');

loginButton.addEventListener('click', function() {
  let isValid = emailUser.value === 'tryber@teste.com' && userPassword.value === '123456' ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.');

  return isValid;
})
>>>>>>> 1d42767359842ddc4c538fdc1e56355bbf538022
