/* REQUISITO 3 */

let buttonEntrar = document.getElementById('botaoEntrar');
let inputLogin = document.getElementById('email');
let inputPassword = document.getElementById('password');

function login () {
    if (inputLogin.value === 'tryber@teste.com' && inputPassword.value == '123456') {
        window.alert ('Olá, Tryber!')
    } else {
        window.alert ('Email ou senha inválidos.')
    }
}

buttonEntrar.addEventListener ('click', login);
