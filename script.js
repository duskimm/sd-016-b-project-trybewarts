function login() {
  const emailLogin = document.getElementById('email-login');
  const pass = document.getElementById('pass');
  if (emailLogin.value === 'tryber@teste.com' && pass.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

document.getElementById('btn-login').addEventListener('click', login);
