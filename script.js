const loginBtn = document.getElementById('form-submit');
const emailIpt = document.getElementById('email');
const passwordIpt = document.getElementById('password');

function changeEventSubmit() {
  if (emailIpt.value === 'tryber@teste.com' && passwordIpt.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

loginBtn.addEventListener('click', changeEventSubmit);
