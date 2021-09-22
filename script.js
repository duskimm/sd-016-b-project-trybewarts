let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', () => {

  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    console.log("Olá, Tryber!");
  } else {
    alert('Email ou senha inválidos.')
  }



});