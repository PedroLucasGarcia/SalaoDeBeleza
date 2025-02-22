// Menu Hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
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

/*document.addEventListener("DOMContentLoaded", function () {
    const dataInput = document.getElementById("data");
    const horaInput = document.getElementById("hora");

    // Restringe os dias disponíveis para terça a domingo e impede dias passados
    dataInput.addEventListener("change", function () {
        let hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        let dataSelecionada = new Date(this.value);
        let diaSemana = dataSelecionada.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

        if (dataSelecionada < hoje) {
            alert("Não é possível selecionar uma data que já passou.");
            this.value = "";
            return;
        }
        
        if (diaSemana === 1) { // Segunda-feira
            alert("As marcações não estão disponíveis às segundas-feiras.");
            this.value = "";
        }
    });

    // Define restrições para horários
    horaInput.addEventListener("focus", function () {
        this.setAttribute("step", "3600"); // Apenas horas inteiras
    });

    horaInput.addEventListener("input", function () {
        let horaSelecionada = this.value;
        let [hora, minuto] = horaSelecionada.split(":").map(Number);

        if (hora < 9 || hora > 18 || minuto !== 0 || (hora >= 12 && hora < 13)) {
            alert("Os horários disponíveis são apenas entre 09:00 e 19:00, exceto entre 12:00 e 13:00, e devem ser selecionados em horas inteiras.");
            this.value = "";
        }
    });
});*/

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

    let numeroWhatsApp = '351923174770'; // Número do salão
    let url = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;
    window.open(url, '_blank');
}

//------------------------------------------------------

function enviarWhatsApp2() {
    let textoMensagem2 = `Olá, gostaria de agendar um horário.`;

    let numeroWhatsApp2 = '351923174770'; // Número do salão
    let url = `https://wa.me/${numeroWhatsApp2}?text=${textoMensagem2}`;
    window.open(url, '_blank');
}