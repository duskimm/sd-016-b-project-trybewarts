const inputEmail = document.getElementById('email-input');

const inputPassword = document.getElementById('password-input');

const btnSubmit = document.getElementById('btn-submit');

function verifyData(event) {
  event.preventDefault();
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  if ((emailValue.trim() === '' || emailValue.split('').includes('@') === false) || passwordValue != '123456') {
    window.alert('Email ou senha inválidos.')
  } else {
    window.alert('Olá, Tryber!')
  }

}

btnSubmit.addEventListener('click', verifyData)