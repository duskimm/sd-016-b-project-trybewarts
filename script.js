const inputEmail = document.getElementById('email-input');

const inputPassword = document.getElementById('password-input');

const btnSubmit = document.getElementById('btn-submit');

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

btnSubmit.addEventListener('click', verifyData);


function populateRateContainer() {
  const container = document.getElementById('rate-container');

  for (let i = 1; i <= 10; i += 1) {
    const labelContainer = document.createElement('label');
    labelContainer.setAttribute('for' , i)
  }
}