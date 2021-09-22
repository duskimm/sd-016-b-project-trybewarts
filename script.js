const inputEmail = document.getElementById('email-input');
const inputPassword = document.getElementById('password-input');
const btnSubmitLogin = document.getElementById('btn-submit-login');
const checkAgreement = document.getElementById('agreement');

function verifyData(event) {
  event.preventDefault();
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  if ((emailValue.trim() === '' || emailValue.split('').includes('@') === false)
  || passwordValue !== '123456') {
    window.alert('Email ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
}

function ableBtn() {
  const btnSubmit = document.getElementById('submit-btn');
  if (checkAgreement.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
}

checkAgreement.addEventListener('click', ableBtn);
btnSubmitLogin.addEventListener('click', verifyData);

