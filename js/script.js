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
        mensagemFormulario.innerHTML = "Área cadastrada: " + bairro + " - " + cidade + " | Risco: " + nivel;
        formulario.reset();
    }
});

const perguntas = [
    {
        pergunta: "Qual é o principal objetivo do AlertaOrbit?",
        respostas: ["Vender sensores", "Prevenir enchentes", "Criar jogos", "Controlar satélites"],
        correta: 1
    },
    {
        pergunta: "Qual tecnologia espacial aparece na solução?",
        respostas: ["Satélites", "Robôs domésticos", "Impressoras", "Câmeras de cinema"],
        correta: 0
    },
    {
        pergunta: "Qual dado pode indicar risco de enchente?",
        respostas: ["Cor da rua", "Modelo do celular", "Nome do bairro", "Nível da água"],
        correta: 3
    },
    {
        pergunta: "Quem pode usar o sistema?",
        respostas: ["Apenas astronautas", "Moradores e Defesa Civil", "Somente lojas", "Apenas escolas"],
        correta: 1
    },
    {
        pergunta: "Qual equipamento pode medir o nível da água?",
        respostas: ["Televisão", "Mouse", "Sensor", "Teclado"],
        correta: 2
    },
    {
        pergunta: "O que o sistema envia quando o risco aumenta?",
        respostas: ["Jogo", "Alerta", "Música", "Senha"],
        correta: 1
    },
    {
        pergunta: "Qual problema o projeto busca reduzir?",
        respostas: ["Enchentes sem aviso", "Falta de filmes", "Lentidão em jogos", "Compras online"],
        correta: 0
    },
    {
        pergunta: "Qual área pode tomar decisões com os dados?",
        respostas: ["Cinema", "Moda", "Restaurante", "Defesa Civil"],
        correta: 3
    },
    {
        pergunta: "Qual linguagem foi usada para a interatividade?",
        respostas: ["JavaScript", "Python", "C++", "SQL"],
        correta: 0
    },
    {
        pergunta: "Qual é um benefício da solução?",
        respostas: ["Alertas mais rápidos", "Mais trânsito", "Menos informação", "Mais risco"],
        correta: 0
    }
];

const campoPergunta = document.querySelector("#pergunta");
const campoRespostas = document.querySelector("#respostas");
const botaoProximaPergunta = document.querySelector("#proxima-pergunta");
const resultadoQuiz = document.querySelector("#resultado-quiz");

let perguntaAtual = 0;
let pontuacao = 0;
let respostaSelecionada = -1;

function mostrarPergunta() {
    campoPergunta.innerHTML = perguntas[perguntaAtual].pergunta;
    campoRespostas.innerHTML = "";
    resultadoQuiz.innerHTML = "";
    respostaSelecionada = -1;

    perguntas[perguntaAtual].respostas.forEach(function (resposta, indice) {
        campoRespostas.innerHTML += "<button onclick='selecionarResposta(" + indice + ")'>" + resposta + "</button>";
    });
}

function selecionarResposta(indice) {
    respostaSelecionada = indice;
    if (respostaSelecionada === perguntas[perguntaAtual].correta) {
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta!");
    }
}

botaoProximaPergunta.addEventListener("click", function () {
    if (respostaSelecionada === -1) {
        alert("Selecione uma resposta antes de continuar.");
    } else {
        if (respostaSelecionada === perguntas[perguntaAtual].correta) {
            pontuacao++;
        }

        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            campoPergunta.innerHTML = "Quiz finalizado!";
            campoRespostas.innerHTML = "";
            botaoProximaPergunta.style.display = "none";
            resultadoQuiz.innerHTML = "Você acertou " + pontuacao + " de " + perguntas.length + " perguntas.";
        }
    }
});

mostrarPergunta();

const botaoTemaAzul = document.querySelector("#tema-azul");
const botaoTemaEscuro = document.querySelector("#tema-escuro");
const botaoTemaLaranja = document.querySelector("#tema-laranja");

botaoTemaAzul.addEventListener("click", function () {
    document.body.classList.remove("tema-escuro");
    document.body.classList.remove("tema-laranja");
    document.body.classList.add("tema-azul");
});

botaoTemaEscuro.addEventListener("click", function () {
    document.body.classList.remove("tema-azul");
    document.body.classList.remove("tema-laranja");
    document.body.classList.add("tema-escuro");
});

botaoTemaLaranja.addEventListener("click", function () {
    document.body.classList.remove("tema-azul");
    document.body.classList.remove("tema-escuro");
    document.body.classList.add("tema-laranja");
});