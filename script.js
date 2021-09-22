window.onload = function () {
  // Requisito 3

  const emailAndPassord = document.querySelectorAll('.trybewarts-login input');
  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    if (emailAndPassord[0].value === 'tryber@teste.com' && emailAndPassord[1].value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};
