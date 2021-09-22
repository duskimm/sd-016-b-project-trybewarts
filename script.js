// Requisito 3
function btnSignUp() {
  const inputEmail = document.getElementById('input-email').value;
  const inputPassword = document.getElementById('input-password').value;
  if (inputEmail === 'tryber@teste.com' && inputPassword === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

const btnClick = document.getElementById('btn-login');
btnClick.addEventListener('click', btnSignUp);
