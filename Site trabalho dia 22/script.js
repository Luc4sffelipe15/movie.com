let tamanhoFonte = 16;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
}

function diminuirFonte() {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
}
let coresInvertidas = false;

function inverterCores() {
    const elementos = document.querySelectorAll('body, header, main, .filme, footer');
    elementos.forEach(elemento => {
        const corFundo = window.getComputedStyle(elemento).getPropertyValue('background-color');
        const corTexto = window.getComputedStyle(elemento).getPropertyValue('color');
        elemento.style.backgroundColor = corTexto;
        elemento.style.color = corFundo;
    });
}