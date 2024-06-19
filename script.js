const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixaperguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResulados = document.querySelector('.texto-resultado');
const lista = [item1, item2]
const perguntas = [
    {
        enunciado: "Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?",
        alterntivas: ["Isso é assustador!, Isso é maravilhoso!"],
    },
    {
        enunciado: "pergunta 2",
        alterntivas: ["alternativa 1, alternativa 2"],
    },
    {
        enunciado: "pergunta 3",
        alterntivas: ["alternativa 1, alternativa 2"],
    },
];
let atual = 0;
let perguntaAtual;
function mostraPergunta(){
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.Alternativas){
        const botaoAlternativas =document.createElement("button");
        botaoAlternativas.textContent = alterntiva;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
const lapis = {
    tamanho: 20,
    tipo: 'HB',
    cor: 'Grafite',
    TemBorrachaAtras: false
}