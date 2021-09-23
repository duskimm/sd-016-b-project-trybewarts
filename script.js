const inputEmail = document.querySelector('.email');
const inputSenha = document.querySelector('.senha');
const buttonEntrar = document.querySelector('.entrar');
// const buttonEnviar = document.querySelector('#submit-btn');

buttonEntrar.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    const resultados = 'Olá, Tryber!';
    return alert(resultados);
  }
  return alert('Email ou senha inválidos.');
});
