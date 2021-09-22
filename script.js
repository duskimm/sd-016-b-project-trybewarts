// Requisito 3 - identificando valores de input
// no email e senha

const inputEmail = document.querySelector('#email');
const inputPass = document.querySelector('#password');
const botaoEntrar = document.querySelector('#botaoEntrar');

botaoEntrar.addEventListener('click', function (){
  if (inputEmail.value != "tryber@teste.com" && inputPass.value != "123456") {
    alert("Email ou senha inválidos.");
  } else {
    alert("Olá, Tryber!")
  }
})
