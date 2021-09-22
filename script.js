const loginButton = document.getElementById('login-button');
const login = document.getElementById('email');
const password = document.getElementById('password');
const checkAgree = document.getElementById('agreement')
function verifyLogin(){
    if (login.value === 'tryber@teste.com' && password.value === '123456') {
        return alert('Olá, Tryber!');
    }
        return alert('Email ou senha inválidos.');
}

loginButton.addEventListener('click', verifyLogin);
