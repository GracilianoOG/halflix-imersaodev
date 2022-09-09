const jogosCapas = document.querySelector(".jogos__capas");
const campoEntradaCapa = document.querySelector(".jogos__input");
const botaoAdicionaCapa = document.querySelector(".jogos__botao--adicionar");
const botaoDeletaCapa = document.querySelector(".jogos__botao--deletar");
const listaDasCapas = [];

botaoAdicionaCapa.addEventListener("click", () => {
    const capa = devolveEntradaFormatada();
    const ultimoElemento = listaDasCapas.length;
    if(listaDasCapas.includes(capa)) {
        return;
    }
    listaDasCapas.push(capa);
    jogosCapas.innerHTML += `<img class="jogos__capa" src="${listaDasCapas[ultimoElemento]}">`;
});

botaoDeletaCapa.addEventListener("click", () => {
    const capa = devolveEntradaFormatada();
    if(listaDasCapas.includes(capa)) {
        const posicao = listaDasCapas.indexOf(capa);
        listaDasCapas.splice(posicao, 1);
        jogosCapas.children[posicao].outerHTML = "";
    }
});

function devolveEntradaFormatada() {
    return (campoEntradaCapa.value).trim();
}