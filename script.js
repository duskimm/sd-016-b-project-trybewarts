let password = document.getElementById('password');
let email = document.getElementById('email');
let headerButton = document.getElementById('header-button');

headerButton.addEventListener('click', login);


function login() {
  if (email.value === "tryber@teste.com" && password.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos");
  }
} 
