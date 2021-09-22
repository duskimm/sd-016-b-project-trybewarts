let buttonEntrar = 
let inputLogin = document.getElementById('email');
let inputPassword = document.getElementById('password');

function login () {
    if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
        window.alert ('Olá, Tryber!')
    } else {
        window.alert ('Email ou senha inválidos.')
    }
}

buttonEntrar.addEventListener ('click', login);
