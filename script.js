function mensagemLogin(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  const valorEmail = emailInput.value;
  const valorSenha = senhaInput.value;
  console.log(valorSenha);
  console.log(valorEmail);

  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const button = document.getElementById('login');
button.addEventListener('click', mensagemLogin);
