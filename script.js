const getButtonLogin = document.getElementById('login');
const getInputEmail = document.querySelector('.email');
const getInputPassword = document.querySelector('.password');

function login() {
  if (getInputEmail.value === 'tryber@teste.com' && getInputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

getButtonLogin.addEventListener('click', login);
