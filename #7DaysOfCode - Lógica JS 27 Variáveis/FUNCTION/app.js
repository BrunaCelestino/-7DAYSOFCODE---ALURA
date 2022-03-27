var inputNome = document.querySelector("#nome");

var inputIdade = document.querySelector("#idade");

var inputLinguagem = document.querySelector("#linguagem");

var spanResposta = document.querySelector("#resposta1");

var spanRespostaA = document.querySelector("#respostaA");

var spanResposta3 = document.querySelector("#resposta3");

function enter(params) {

    spanResposta.textContent = "Olá " + inputNome.value + ", você tem " +  inputIdade.valueAsNumber + " anos e já está aprendendo " + inputLinguagem.value + "!"
    spanRespostaA.textContent = "Você gosta de estudar " + linguagem.value + "?"
}

function enter1(params) {
        
    spanResposta3.textContent = "Muito bom! Continue estudando e você terá muito sucesso."
       
}

function enter2(params) {
    spanResposta3.textContent = "Ahh que pena... Já tentou aprender outras linguagens?"
}