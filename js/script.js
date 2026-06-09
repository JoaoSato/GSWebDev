const imagemSlide = document.querySelector("#imagem-slide");
const botaoAnterior = document.querySelector("#anterior");
const botaoProximo = document.querySelector("#proximo");

const imagens = [
    "./images/enchente.png",
    "./images/satelite.png",
    "./images/sensor.png",
    "./images/cidade.png"
];

let imagemAtual = 0;

botaoProximo.addEventListener("click", function () {
    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }

    imagemSlide.src = imagens[imagemAtual];
});

botaoAnterior.addEventListener("click", function () {
    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }

    imagemSlide.src = imagens[imagemAtual];
});

const formulario = document.querySelector("#formulario-risco");
const mensagemFormulario = document.querySelector("#mensagem-formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const cidade = document.querySelector("#cidade").value.trim();
    const bairro = document.querySelector("#bairro").value.trim();
    const nivel = document.querySelector("#nivel").value.trim();

    if (nome === "" || cidade === "" || bairro === "" || nivel === "") {
        alert("Preencha todos os campos antes de enviar.");
        mensagemFormulario.innerHTML = "Cadastro não enviado. Existem campos vazios.";
    } else {
        alert("Área de risco cadastrada com sucesso!");
        mensagemFormulario.innerHTML = "Área cadastrada: "+bairro+" - "+cidade+" | Risco: "+nivel;
        formulario.reset();
    }
});