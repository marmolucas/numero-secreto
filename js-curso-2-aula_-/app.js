function exibirTextoNaTela(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 100');

function verificarChute(){

    console.log("você tentou verificar o chute");

}



