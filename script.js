// Login validation
document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const trybeEmail = 'tryber@teste.com';
  const trybeSenha = '123456';
  if (email === trybeEmail && senha === trybeSenha) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// 18
const submitBtn = document.querySelector('#submit-btn');
submitBtn.disabled = true;
const agree = document.querySelector('#agreement');
agree.addEventListener('click', () => {
  if (agree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// 20
const tArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
counter.innerHTML = '500';

function countLetters() {
  const comments = tArea.value.length;
  const maxLength = tArea.getAttribute('maxLength');
  const currentLength = maxLength - comments;
  counter.innerHTML = currentLength;
}
tArea.addEventListener('input', countLetters);
