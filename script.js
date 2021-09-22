/// Verificar se o login está correto
let loginButton = document.getElementById('login-button');

function verifyLogin(event) {
  let password = document.getElementById('password').value;
  console.log(password);
  let email = document.getElementById('email').value;
  console.log(email);
  if (password != '123456' || email != 'tryber@teste.com') {
    alert('Email ou senha inválidos.');
  }
  else {
    alert('Olá, Tryber!')
  }
}

loginButton.addEventListener('click',verifyLogin);