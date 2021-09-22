const btnSubmit = document.getElementById('btn-submit');
const inputLogin = document.querySelectorAll('input');

function login() {
  if (inputLogin[0].value === 'tryber@teste.com' && inputLogin[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnSubmit.addEventListener('click', login);
