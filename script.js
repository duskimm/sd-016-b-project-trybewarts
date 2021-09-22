const btnSub = document.getElementById('btn-sub');

function email() {
  const inputEmail = document.getElementById('input__email').value;
  const inputSenha = document.getElementById('input-senha').value;
  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function loginValidate(e) {
  e.preventDefault();
  email();
}

btnSub.addEventListener('click', loginValidate);
