// Variáveis?
const inputPergunta = document.querySelector("#inputPergunta");
const buttonPergunta = document.querySelector("#buttonPergunta");
const elementoResposta = document.querySelector("#resposta");

document.querySelector("#inputPergunta").focus();

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem que não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];

// Clicar em fazer pergunta
function fazerPergunta() {
    if (inputPergunta.value == "") {
        alert("Digite sua pergunta!");

        return;
    }

    buttonPergunta.setAttribute("disabled", true);

    // Gerar número aleatório e selecionar resposta
    const pergunta = "<div>" + inputPergunta.value + "</div>";
    const totalRespostas = respostas.length;
    var resposta = respostas[Math.floor(Math.random() * totalRespostas)];

    elementoResposta.innerHTML = pergunta + resposta;

    elementoResposta.style.opacity = 1;

    // Apagar resposta depois de 3 minutos
    setTimeout(() => {
        elementoResposta.style.opacity = 0;
        buttonPergunta.removeAttribute("disabled");
    }, 
    3000);
}
