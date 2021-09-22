function username() {
  const email = document.getElementById('emailinput');
  const password = document.getElementById('passwordinput');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', username);
