let inputEmail = document.querySelector('.email').value
let inputSenha = document.querySelector('.password').value
let getBtn = document.querySelector('.bnt')

function validarSenha (event) {
  const email = 'tryber@teste.com'
  const senha = '123456'
  if (inputEmail == email && inputSenha == senha) {
    alert("Olá Tryber!");
  }else {
    alert("Email ou senha inválidos");
  }
}

getBtn.addEventListener('click', validarSenha);