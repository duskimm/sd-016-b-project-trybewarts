const loginButton = document.querySelector('.loginBtn');
const emailUser = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');
const agreeBox = document.querySelector('#agreement')
let subtmitButton = document.querySelector('#submit-btn')
subtmitButton.disabled = true;



loginButton.addEventListener('click', function () {
  const isValid = emailUser.value === 'tryber@teste.com' && userPassword.value === '123456' ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.');

  return isValid;
});

agreeBox.addEventListener('click', function(evt){

  if(evt.target.checked === true){
    subtmitButton.disabled = false
  } else {
    subtmitButton.disabled = true
  }

})
