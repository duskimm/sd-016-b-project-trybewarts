function login() {
  const email = document.querySelector('.email.').value;
  const senha = document.querySelector('.senha').value;
  const validation = '';
  if (email === 'trybe@teste.com' && senha === '123456') {
   validation = 'Olá, Tryber!';
  } else {
   validation ='Email ou senha inválidos.';
  }
  return alert(validation);
}
const loginButton = document.querySelector('button');
loginButton.addEventListener('click', login);
