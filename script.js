// If (email = tryber@teste.com && senha = 123456) {
//   alert ("Olá, Tryber!")
// } else {
//   alert ("Email ou senha inválidos")
// }
const agreement = document.getElementById('agreement');
const textArea = docuemnt.querySelect('.textarea');

function compare() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const button = document.getElementById('btn-submit');

button.addEventListener('click', compare);

function submitButton () {
  if (agreement.checked && textArea.length => 16) {
    
  }
}

agreement.addEventListener ('click', submitButton);
