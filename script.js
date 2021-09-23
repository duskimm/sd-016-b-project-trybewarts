const btnSub = document.getElementById('btn-sub');
const btnSub2 = document.querySelector('#submit-btn');
const ageChckBox2 = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const paragraph = document.getElementById('counter');

paragraph.innerText = 500;

function countChar() {
  const numChar = textArea.value.length;
  const count = 500 - numChar;
  paragraph.innerText = count;
  // paragraph.innerText = `Caracteres restantes: ${count}`;
}
textArea.addEventListener('keyup', countChar);

btnSub2.disabled = true;

function disable(e) {
  const eTar = e.target.checked;
  if (eTar) {
    btnSub2.disabled = false;
  } else {
    btnSub2.disabled = true;
  }
}

function email() {
  const inputEmail = document.getElementById('input__email').value;
  const inputSenha = document.getElementById('input-senha').value;
  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function loginValidate(e) {
  e.preventDefault();
  email();
}

ageChckBox2.addEventListener('change', disable);
btnSub.addEventListener('click', loginValidate);
