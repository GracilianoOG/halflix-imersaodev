const jogos = document.querySelector(".jogos__capas");
const jogosCapas = [

];

for(let i = 0; i < jogosCapas.length; i++) {
    jogos.innerHTML = jogos.innerHTML + `<img class="jogos__capa" src="${jogosCapas[i]}">`;
}