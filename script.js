const loginEmail = document.querySelector('.trybewarts-email');
const loginPassword = document.querySelector('.trybewarts-password');
const loginButton = document.querySelector('.trybewarts-submit');

loginButton.addEventListener('click', (event) => {
  const logMail = 'tryber@teste.com';
  const logPass = '123456';
  event.preventDefault();

  if ((loginEmail.value === logMail) && (loginPassword.value === logPass)) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
