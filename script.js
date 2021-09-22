(() => { 
    const button = document.querySelector('.trybewarts-login-button');
    button.addEventListener('click', (e) => {
    const emailInput = document.querySelector('#emailId');
    const passwordInput = document.querySelector('#passwordId');
    if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
    }else{alert('Email ou senha inválidos.');}
    });
    })
    ();

    