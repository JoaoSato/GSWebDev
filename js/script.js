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