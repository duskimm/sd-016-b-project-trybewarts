const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function validateLogin() {
  // Parte do requisito 3: Confere se o login é válido e alerta.
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enableSubmitBtn() {
  // Requisito 18: Confere se o atributo 'disable' está configurado no botão de enviar o formulário.
  // Se true, remove o atributo. Se false, adiciona o atributo.
  submitBtn.toggleAttribute('disabled');
}

window.onload = function trybewartsProject() {
  loginBtn.addEventListener('click', validateLogin); // Chama a função validateLogin ao clicar no botão do login.
  agreement.addEventListener('change', enableSubmitBtn); // Chama a função enableSubmitBtn quando o checkbox é marcado ou desmarcado.
};
