const jogosCapas = document.querySelector(".jogos__capas");
const campoEntradaCapa = document.querySelector(".jogos__input");
const botaoAdicionaCapa = document.querySelector(".jogos__botao--adicionar");
const botaoDeletaCapa = document.querySelector(".jogos__botao--deletar");
const listaDasCapas = [];

botaoAdicionaCapa.addEventListener("click", () => {
    const capa = devolveEntradaFormatada();
    const ultimoElemento = listaDasCapas.length;
    if(listaDasCapas.includes(capa) || capa == "") {
        return;
    }
    listaDasCapas.push(capa);
    const capaContainer = document.createElement("div");
    capaContainer.classList.add("jogos__capa");
    capaContainer.innerHTML += `<img class="capa__imagem" src="${listaDasCapas[ultimoElemento]}">`;
    capaContainer.innerHTML += `<button class="capa__deletar" type="button">&times;</button>`;
    capaContainer.querySelector(".capa__deletar").addEventListener("click", (event) => {
        deletaCapa(capa, event.target.parentNode);
        console.log(listaDasCapas);
    });
    jogosCapas.appendChild(capaContainer);
    limpaCampo();
});

botaoDeletaCapa.addEventListener("click", () => {
    const capa = devolveEntradaFormatada();
    if(listaDasCapas.includes(capa)) {
        deletaCapa(capa, jogosCapas.children[listaDasCapas.indexOf(capa)]);
    }
});

function deletaCapa(listaElemento, elemento, limparCampo = true) {
    const posicao = listaDasCapas.indexOf(listaElemento);
    listaDasCapas.splice(posicao, 1);
    elemento.outerHTML = "";
    if(limparCampo) {limpaCampo();}
}

function devolveEntradaFormatada() {
    return (campoEntradaCapa.value).trim();
}

function limpaCampo() {
    campoEntradaCapa.value = "";
}