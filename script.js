const btnLogin = document.getElementById('btn-login');
const agreementInput = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

btnLogin.addEventListener('click', () => {
  const email = document.getElementById('input-login').value;
  const password = document.getElementById('input-password').value;

  if (email !== 'tryber@teste.com' && password !== '123456') {
    return alert('Email ou senha inválidos.');
  }
  return alert('Olá, Tryber!');
});

agreementInput.addEventListener('click', () => {
  if (agreementInput.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', true);
  }
});
