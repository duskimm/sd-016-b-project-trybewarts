function entrar() {
  const email = document.querySelector('#input-email').value;
  const senha = document.querySelector('#input-senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') alert('Olá, Tryber!');
  else alert('Email ou senha inválidos.');
}

function configurar() {
  document.querySelector('#botao-entrar').addEventListener('click', entrar);
}

window.onload = configurar;

// Deixar a linha no final pra resolver o lint
