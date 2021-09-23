// let nameValue = document.querySelector('#input-name').value;
// let emailValue = document.querySelector('#input-email').value;
// let select = document.querySelector('#house');
// let option = select.text;
// let radio = document.getElementsByName('family');

// for (let i = 0; i < radio.length; i += 1) {
//   if (radio[i].checked) {
//     let radioValue = radio[i].checked;

//     break;
//   }

// }

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

function satisfactionLevel(radiobtn) {
  for (let i = 1; i <= radiobtn; i += 1) {
    const radio = radioopt(i);
    const label = labelopt(i);
    divrate.appendChild(radio);
    divrate.appendChild(label);
  }
}

satisfactionLevel(10);

// Requisito 18
const submitButton = document.getElementById('submit-btn');
submitButton.disabled = true;

function enableSubmitButton(event) {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const agreementCheck = document.getElementById('agreement');
agreementCheck.addEventListener('change', enableSubmitButton);

// Requisito 20
const counter = document.getElementById('counter');
counter.innerText = '500';

function updateCounter(event) {
  counter.innerText = 500 - event.target.value.length;
}

const textarea = document.getElementById('textarea');
textarea.addEventListener('keyup', updateCounter);
