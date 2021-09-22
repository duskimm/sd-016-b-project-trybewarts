const loginButton = document.getElementById('login');
const agreeCheck = document.getElementById('agreement');
const buttonContainer = document.querySelector('.button-container');
const createSubmit = document.createElement('button');
const textAreaInput = document.getElementById('textarea');

// Evento para verificar email e senha.
loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  console.log(senha);
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Criando botão Enviar.
createSubmit.id = 'submit-btn';
createSubmit.type = 'submit';
createSubmit.innerText = 'Enviar';
createSubmit.setAttribute('disabled', true);
buttonContainer.appendChild(createSubmit);

// Evento para habilitar e desabilitar o botão enviar.
agreeCheck.addEventListener('click', () => {
  if (createSubmit.disabled === true) {
    createSubmit.removeAttribute('disabled', '');
  } else {
    createSubmit.setAttribute('disabled', true);
  }
});

// Função para contar os caracteres
function textAreaCounter() {
  const textArea = document.getElementById('textarea').value;
  const contador = document.getElementById('counter');
  contador.innerText = 500 - textArea.length;
}

// Evento para contar os caracteres em tempo real
textAreaInput.addEventListener('input', textAreaCounter);
