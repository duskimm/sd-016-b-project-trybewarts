const inputEmail = document.getElementById('input-login-email');
const inputSenha = document.getElementById('input-login-senha');
const button = document.getElementById('button-formulario');

function verificaFormulario() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', verificaFormulario);

const houses = [
  'Gitnória',
  'Reactpuff',
  'Corvinode',
  'Pytherina',
];

const idHouses = [
  'gitnoria-house',
  'reactpuff-house',
  'corvinode-house',
  'pytherina-house',
];

function selectHouse() {
  const selectHouses = document.getElementById('house');
  for (let index = 0; index < houses.length; index += 1) {
    const optionHouse = document.createElement('option');
    optionHouse.innerHTML = houses[index];
    optionHouse.id = idHouses[index];
    selectHouses.appendChild(optionHouse);
  }
}
selectHouse();
