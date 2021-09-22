const inputEmailHeader = document.getElementById('input-email-header');
const inputSenha = document.getElementById('input-senha');
const buttonFormLogin = document.getElementById('button-form');
const buttonForm = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');
buttonForm.disabled = true;

function formValidade() {
  const inputEmailValue = inputEmailHeader.value;
  const inputSenhaValue = inputSenha.value;
  if (inputEmailValue === 'tryber@teste.com' && inputSenhaValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonFormLogin.addEventListener('click', formValidade);

function presskey() {
  if (checkboxAgreement.checked) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
}

checkboxAgreement.addEventListener('change', presskey);

/* Referência para resolver a questão 18
https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/#:~:text=A%20melhor%20maneira%20de%20fazer,alternar%20seu%20estado%20on%20%2F%20off%20.
*/
