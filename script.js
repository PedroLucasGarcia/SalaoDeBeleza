window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Menu Hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

//------------------------------------------------------

const carousel = document.getElementById("carousel");

// Quando passar o mouse, pausa a rolagem
carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
});

// Quando sair com o mouse, continua a rolagem
carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
});

//------------------------------------------------------

function enviarWhatsApp() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let servico = document.getElementById('servico').value;
    let data = document.getElementById('data').value;
    let hora = document.getElementById('hora').value;
    let mensagem = document.getElementById('mensagem').value;

    if (!nome || !telefone || !servico || !data || !hora) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    let textoMensagem = `Olá, gostaria de agendar um horário.%0A%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*Serviço:* ${servico}%0A*Data:* ${data}%0A*Hora:* ${hora}`;
    
    if (mensagem.trim() !== "") {
        textoMensagem += `%0A*Mensagem:* ${mensagem}`;
    }

    let numeroWhatsApp = '351938553771'; // Número do salão
    let url = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;
    window.open(url, '_blank');
}

function enviarWhatsApp2() {
    let textoMensagem2 = `Olá, gostaria de agendar um horário.`;

    let numeroWhatsApp2 = '351938553771'; // Número do salão
    let url = `https://wa.me/${numeroWhatsApp2}?text=${textoMensagem2}`;
    window.open(url, '_blank');
}
