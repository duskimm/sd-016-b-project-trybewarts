// If (email = tryber@teste.com && senha = 123456) {
//   alert ("Olá, Tryber!")
// } else {
//   alert ("Email ou senha inválidos")
// }
const agreement = document.getElementById('agreement');
const button = document.getElementById('btn-submit');
const submitButton = document.getElementById('submit-btn');

function compare() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', compare);

submitButton.disabled = true;

function sendButton() {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('click', sendButton);
