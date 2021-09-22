function validarSenha(event) {
  event.preventDefault();
  const inputEmail = document.querySelector('.email').value;
  const inputSenha = document.querySelector('.password').value;

  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const getBtn = document.querySelector('.bnt');
getBtn.addEventListener('click', validarSenha);
