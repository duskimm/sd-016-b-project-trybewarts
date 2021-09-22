let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let loginButton = document.querySelector('#login-button');
let agreement = document.querySelector('#agreement')


loginButton.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' || passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (document.getElementById('submit-btn').disabled === false) {
    document.getElementById('submit-btn').disabled = true;
  } else {
    document.getElementById('submit-btn').disabled = false;
  }
});
