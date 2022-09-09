const jogos = document.querySelector(".jogos__capas");
const campoEntradaCapa = document.querySelector(".jogos__input");
const botaoAdicionaCapa = document.querySelector(".jogos__botao--adicionar");
const botaoDeletaCapa = document.querySelector(".jogos__botao--deletar");
const jogosCapas = [];

botaoAdicionaCapa.addEventListener("click", () => {
    const capa = devolveEntradaFormatada();
    if(jogosCapas.includes(capa)) {
        return;
    }
    jogosCapas.push(capa);
    const ultimoElemento = jogosCapas.length - 1;
    jogos.innerHTML += `<img class="jogos__capa" src="${jogosCapas[ultimoElemento]}">`;
});

botaoDeletaCapa.addEventListener("click", () => {
    const capa = devolveEntradaFormatada();
    if(jogosCapas.includes(capa)) {
        const posicao = jogosCapas.indexOf(capa);
        jogosCapas.splice(posicao, 1);
        jogos.children[posicao].outerHTML = "";
    }
});

function devolveEntradaFormatada() {
    return (campoEntradaCapa.value).trim();
}