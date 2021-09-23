const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('senha');
const buttonEnter = document.getElementById('btn-entrar');
const checkAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const countCaracters = document.getElementById('counter');
// const inputName = document.getElementById('input-name');
// const inputLastName = document.getElementById('input-lastname');
// const inputEmailForm = document.getElementById('input-email');
// const house = document.getElementById('house');
// const level = document.getElementsByName('rate');

buttonEnter.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function agreementValidation() {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
agreementValidation();

checkAgreement.addEventListener('click', agreementValidation);
// let count = 500;
// function textCount() {
//   count -= textArea.value.length;
//   countCaracters.innerText = `${count}`;
// }

// textArea.addEventListener('keyup', textCount);

countCaracters.innerText = 'Você ainda tem 500 caracteres!';
textArea.addEventListener('keyup', () => {
  const sum = 500 - textArea.value.length;
  countCaracters.innerText = `Você ainda tem ${sum} caracteres`;
});

// const data = document.getElementById('data');

// function dataForm() {
//   data.innerText = `Nome: ${inputName.value} ${inputLastName.value} Email: ${inputEmailForm.value} Observações:${textArea.value} Casa: ${house.value} Avaliação: ${level.value} `;
// }

// btnSubmit.addEventListener('click', dataForm);
