const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const agreement = document.querySelector('#agreement');
const submitBtn = document.getElementById('submit-btn');

loginButton.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' || passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (submitBtn.disabled === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

