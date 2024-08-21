let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function textoDeTitulo(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let intentoUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    console.log(numeroIntentos);
    if (numeroSecreto === intentoUsuario) {
        textoDeTitulo(`p`,`Acertaste en ${numeroIntentos} ${(numeroIntentos === 1) ? "vez" : "veces"}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
    if (numeroSecreto < intentoUsuario) {
        textoDeTitulo(`p`,`Es menor`)
    } else {textoDeTitulo(`p`,`es mayor`)

    }
    }
    numeroIntentos++;
    limpiarCaja();

    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // SI SORTEO TODOS LOS NUMEROS MOSTRAR UN MENSAJE Y CERRAR EL JUEGO//
    if (listaNumerosSorteados.length == numeroMaximo) {
        textoDeTitulo(`p`,`Ya se sorteron todos los numeros posibles`);
    } else {
    //SI EL NUMERO GENERADO ESTA INCLUIDO EN LA LISTA HACEMOS UNA OPERACION SI NO, HACEMOS OTRA//
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales () {
    textoDeTitulo(`h1`,`Juego del numero secreto`);
    textoDeTitulo(`p`,`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}


function reiniciarJuego () {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute(`disabled`,true);
}

condicionesIniciales();






