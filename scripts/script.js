const user = {
  email: 'tryber@teste.com',
  password: '123456',
  trueAgreement: false,
};

function validateUser() {
  document.querySelector('#btn-login').addEventListener('click', () => {
    const userEmail = document.querySelector('#email').value;
    const userPassword = document.querySelector('#password').value;
    if (userEmail === user.email && userPassword === user.password) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

function validateAgreement() {
  const agreement = document.querySelector('#agreement');
  const submitBtn = document.querySelector('#submit-btn');
  agreement.addEventListener('click', () => {
    if (user.trueAgreement) {
      user.trueAgreement = false;
      submitBtn.disabled = true;
    } else {
      user.trueAgreement = true;
      submitBtn.disabled = false;
    }
  });
}

function charCount() {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  let numberChar = parseInt(counter.innerText, 10);
  
  textArea.addEventListener('input', () => {
    counter.innerText = numberChar - textArea.value.length;
  });
}

window.onload = () => {
  /**
   * Adiciona animação para o placeholder do input desaparecer sempre que for focado;
   */
  const inputELements = document.getElementsByTagName('input');
  Object.values(inputELements).forEach((element) => { // Itera os elementos como objeto e não como array;
    const pholder = element.placeholder; // Armazena o elemento antigo;
    element.addEventListener('focus', () => { // Remove o placeholder do elemento quando focado;
      element.placeholder = '';
    });
    element.addEventListener('blur', () => { // Devolve o placeholder do elemento quando desfocado;
      element.placeholder = pholder;
    });
  });

  validateUser();
  validateAgreement();
  charCount();
};
