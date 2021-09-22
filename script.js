function isValidEmail() {
  const email = document.getElementById('email-input');
  return email.value === 'tryber@teste.com';
}

function isValidPassword() {
  const password = document.getElementById('password-input');
  return password.value === '123456';
}

function loginSuccess() {
  alert('Olá, Tryber!');
}

function loginFail() {
  alert('Email ou senha inválidos.');
}

function validateForm() {
  if (isValidEmail() && isValidPassword()) {
    loginSuccess();
  } else {
    loginFail();
  }
}

function addFormEvents() {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', () => {
    validateForm();
  });
}

window.onload = () => {
  addFormEvents();
};
