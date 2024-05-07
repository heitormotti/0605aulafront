const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Validação do nome
    if (!/^[A-Za-z\s]+$/.test(nome)) {
        alert('Nome inválido: apenas letras e espaços são permitidos.');
        return;
    }

    if (nome.length > 100) {
        alert('Nome muito longo: máximo de 100 caracteres.');
        return;
    }

    if (!/^[\w-+\.]+@[\w-+\.]+\.[a-z]{2,}$/i.test(email)) {
        alert('Email inválido.');
        return;
    }

    // Validação do telefone (REGEX para formato DDD + número)
    if (!/^(\d{2})\s*(\d{4})\s*(\d{4})$/.test(telefone)) {
        alert('Telefone inválido: formato DDD + número.');
        return;
    }

    alert('Dados válidos! Formulário enviado com sucesso.');
    formulario.submit(); 
});
