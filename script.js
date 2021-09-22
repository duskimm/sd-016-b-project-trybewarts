const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', () => {
  const email = document.getElementById('input-login').value;
  const password = document.getElementById('input-password').value;

  if (email !== 'tryber@teste.com' && password !== '123456') {
    return alert('Email ou senha inválidos.');
  }
  return alert('Olá, Tryber!');
});
