let buttonEntrar = document.getElementById('botao-entrar');
let inputLogin = document.querySelectorAll('input')[0];
let inputPassword = document.querySelectorAll('input')[1];

buttonEntrar.addEventListener ('click', login);

function login () {
    if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
        window.alert ('Olá, Tryber!')
    } else {
        window.alert ('Email ou senha inválidos.')
    }
}
