

const btnEntrar = document.querySelector('button');
btnEntrar.addEventListener('click', () => {
  const email = document.querySelector('.emailVal').value;
  const senha = parseInt(document.querySelector('.pswVal').value, 10);
  const psw = 123456;
  const mail = 'tryber@teste.com';
  if (psw === senha && mail === email) {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
});
