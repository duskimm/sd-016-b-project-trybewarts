const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const buttonEntrar = document.getElementById('btn-entrar');

// Validando email e senha e retorna um alert
function menssagem() {
  let valueEmail = inputEmail.value;
  console.log(valueEmail);
  let valueSenha = inputSenha.value;
  console.log(valueSenha);
  if (valueEmail === 'tryber@teste.com' && valueSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEntrar.addEventListener('click', menssagem);
