

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
    botones[4] = document.getElementById("decisiones");
    sonidos[4] = document.getElementById("decisionesSonido");
    botones[5] = document.getElementById("aprendo");
    sonidos[5] = document.getElementById("aprendoSonido");
    botones[6] = document.getElementById("estupideces");
    sonidos[6] = document.getElementById("estupidecesSonido");
    botones[7] = document.getElementById("escuchar");
    sonidos[7] = document.getElementById("escucharSonido");

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
    botones[4].addEventListener('click', () => {
        sonidos[4].play();
    })
    botones[5].addEventListener('click', () => {
        sonidos[5].play();
    })
    botones[6].addEventListener('click', () => {
        sonidos[6].play();
    })
    botones[7].addEventListener('click', () => {
        sonidos[7].play();
    })
})


