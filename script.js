const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreeCheckbox = document.getElementById('agreement');









let logInFeedback = () => {
    if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
        alert ('Email ou senha inválidos') 
    } else {
        alert ('Olá Tryber!')
    }
}
loginButton.addEventListener('click', logInFeedback);

let buttonDisable = () => {
    if (agreeCheckbox.checked === true) {
        submitButton.disabled === false
    } else {
        submitButton.disabled === true
    }
}

buttonDisable();