const jogos = document.querySelector(".jogos__capas");
const campoEntradaCapa = document.querySelector(".jogos__input");
const botaoAdicionaCapa = document.querySelector(".jogos__botao--adicionar");
const jogosCapas = [];

botaoAdicionaCapa.addEventListener("click", () => {
    if(jogosCapas.includes(campoEntradaCapa.value)) {
        console.log("Elemento repetido!");
        return;
    }
    jogosCapas.push(campoEntradaCapa.value);
    const ultimoElemento = jogosCapas.length - 1;
    jogos.innerHTML += `<img class="jogos__capa" src="${jogosCapas[ultimoElemento]}">`;
});