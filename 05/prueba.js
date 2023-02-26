function doble (n) {
    return numero * 2;
}

function triple(numero) {
    return numero * 3;
}

function aplicarCallback (numero, callback) {
    return callback(numero);
}

console.log (aplicarCallback(1,triple));

/* Ejercicio CALCULADORA */

function suma (numero1, numero2) {
    return numero1 + numero2
}

function resta(numero1, numero2) {
    return numero1 - numero2
}

function multiplicacion (numero1, numero2) {
    return numero1  * numero2
}

function division (numero1, numero2) {
    return numero1 / numero2
}

function calculadora (numero1, numero2, callback) {
    return callback (numero1,numero2);
}

console.log (calculadora(2,2, multiplicacion))