const botaoLogin = document.getElementsByClassName('botao-login')[0];
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');

function checkLogin () {
    if(inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}

botaoLogin.addEventListener('click', checkLogin);