const loginButton = document.getElementById('login');

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

const agreeCheck = document.getElementById('agreement');

// Criando botão Enviar.
const buttonContainer = document.querySelector('.button-container');
const createSubmit = document.createElement('button');
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
