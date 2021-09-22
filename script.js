function validateCredentials(event) {
  event.preventDefault();
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

const loginButton = document.querySelector('.trybewarts-login button');
loginButton.addEventListener('click', validateCredentials);
