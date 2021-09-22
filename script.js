window.onload = function () {
  handleLogin();

  const agreement = document.querySelector('#agreement');

  agreement.onclick = function () {
    const confirm = document.querySelector('#submit-btn');
    if (agreement.checked) {
      confirm.removeAttribute('disabled');
    } else {
      confirm.setAttribute('disabled', '');
    }
  }

  loadRates(10);
}

function handleLogin() {
  const form = document.querySelector('.trybewarts-login');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('#login-email');
    const password = document.querySelector('#login-password');

    if ((email.value === "tryber@teste.com") && (password.value === "123456")) {
      alert('Olá, Tryber!');
    }

    alert('Email ou senha inválidos.');
  })
}

function loadRates(quantidade) {
  const parent = document.querySelector('.rate-buttons');

  for (let i = 1; i <= quantidade; i++) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('radiobutton');

    const rateID = `rate-${i}`

    const label = document.createElement('label');
    label.innerText = i;
    label.setAttribute('for', rateID);

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'rate');
    input.setAttribute('id', rateID);
    input.setAttribute('value', i);

    divContainer.appendChild(input);
    divContainer.appendChild(label);

    parent.appendChild(divContainer);
  }
}
