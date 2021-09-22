const inputEmail = document.querySelector('.trybewarts-login #input-email');
const inputPassword = document.querySelector('.trybewarts-login #input-password');
const loginBtn = document.querySelector('.trybewarts-login button');

loginBtn.addEventListener('click', () => {
  const email = inputEmail.value;
  const senha = inputPassword.value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
