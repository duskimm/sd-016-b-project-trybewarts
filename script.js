const loginBtn = document.getElementById('form-submit');
const emailIpt = document.getElementById('email');
const passwordIpt = document.getElementById('password');
const formDiv4 = document.querySelector('.form-div-4');
const sendBtn = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');

function changeEventSubmit() {
  if (emailIpt.value === 'tryber@teste.com' && passwordIpt.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

loginBtn.addEventListener('click', changeEventSubmit);

function createRadio() {
  for (let i = 1; i <= 10; i += 1) {
    const lbl = document.createElement('label');
    lbl.innerText = i;
    const radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.value = i;
    radioBtn.name = 'rate';
    formDiv4.appendChild(lbl);
    lbl.appendChild(radioBtn);
  }
}
createRadio();

function checkMarked() {
  if (agreementCheck.checked) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

agreementCheck.addEventListener('click', checkMarked);
