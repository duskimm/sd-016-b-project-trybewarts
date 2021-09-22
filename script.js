function validateCredentials(event) {
  event.preventDefault();
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

const loginButton = document.querySelector('.trybewarts-login button');
loginButton.addEventListener('click', validateCredentials);

// Requisito 14:

const divrate = document.getElementById('divrate');

function radioopt(i) {
  const radio = document.createElement('input');
  radio.id = `rate${[i]}`;
  radio.value = [i];
  radio.name = 'rate';
  radio.type = 'radio';

  return radio;
}

function labelopt(i) {
  const label = document.createElement('label');
  label.innerText = [i];
  label.htmlFor = `rate${[i]}`;

  return label;
}

function satisfactionLevel (radiobtn) {
  for (let i = 1; i <= radiobtn; i += 1) {
    const radio = radioopt(i);
    const label = labelopt(i);
    divrate.appendChild(radio);
    divrate.appendChild(label);
  }
}

satisfactionLevel(10);
