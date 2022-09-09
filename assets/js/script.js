const jogos = document.querySelector(".jogos__capas");
const campoEntradaCapa = document.querySelector(".jogos__input");
const botaoAdicionaCapa = document.querySelector(".jogos__botao--adicionar");
const botaoDeletaCapa = document.querySelector(".jogos__botao--deletar");
const jogosCapas = [];

botaoAdicionaCapa.addEventListener("click", () => {
    if(jogosCapas.includes(campoEntradaCapa.value)) {
        return;
    }
    jogosCapas.push(campoEntradaCapa.value);
    const ultimoElemento = jogosCapas.length - 1;
    jogos.innerHTML += `<img class="jogos__capa" src="${jogosCapas[ultimoElemento]}">`;
});

botaoDeletaCapa.addEventListener("click", () => {
    if(jogosCapas.includes(campoEntradaCapa.value)) {
        const posicao = jogosCapas.indexOf(campoEntradaCapa.value);
        jogosCapas.splice(posicao, 1);
        jogos.children[posicao].outerHTML = "";
    }
});