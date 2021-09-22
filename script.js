let loginButton = document.querySelector('.loginBtn');
let emailUser = document.querySelector('.user-email');
let userPassword = document.querySelector('.user-password')

loginButton.addEventListener('click',function(){
  let isValid = emailUser.value === 'tryber@teste.com' && userPassword.value === '123456' ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.')

  return isValid;
  
})