const loginButton = document.querySelector('button');

function validateEmail(event) {
  event.preventDefault();
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', validateEmail);
