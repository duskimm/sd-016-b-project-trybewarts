const loginBtn = document.getElementById('form-submit');
const emailIpt = document.getElementById('email');
const passwordIpt = document.getElementById('password');

function changeEventSubmit () {
  return emailIpt.value === 'tryber@teste.com' && passwordIpt.value === '123456' ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.');
}
loginBtn.addEventListener('click', changeEventSubmit);
