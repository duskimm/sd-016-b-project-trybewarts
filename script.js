//import './node_modules/just-validate/dist/js/just-validate.min.js'

new window.JustValidate('.js-form',{
    rules: {
        email:{
            required: true,
            value:'tryber@teste.com',
        },
        senha:{
            required: true,
            password: '123456'
        }
    },
    messages: {
        email: {
            required: 'Email ou senha inválidos.',
            value: 'Olá, Tryber!'
        },
        senha:{
            required: 'Email ou senha inválidos.',
            value: 'Olá, Tryber!'
        }
    }
});