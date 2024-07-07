

document.addEventListener('DOMContentLoaded', () => {
    var botones = [];
    var sonidos = [];

    botones[0] = document.getElementById("tienesRazon");
    sonidos[0] = document.getElementById("tienesRazonSonido");
    botones[1] = document.getElementById("miCulpa");
    sonidos[1] = document.getElementById("miCulpaSonido");
    botones[2] = document.getElementById("misAmigas");
    sonidos[2] = document.getElementById("misAmigasSonido");
    botones[3] = document.getElementById("mejorNovia");
    sonidos[3] = document.getElementById("mejorNoviaSonido");

    botones[0].addEventListener('click', () => {
        sonidos[0].play();
    })
    botones[1].addEventListener('click', () => {
        sonidos[1].play();
    })
    botones[2].addEventListener('click', () => {
        sonidos[2].play();
    })
    botones[3].addEventListener('click', () => {
        sonidos[3].play();
    })
})


