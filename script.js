const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoLogin = document.getElementById('botaoLogin');

function varificaUsuario() {
  const loginDigitado = email.value;
  const senhaDigitada = senha.value;

  if (loginDigitado === 'tryber@teste.com' && senhaDigitada === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', varificaUsuario);
