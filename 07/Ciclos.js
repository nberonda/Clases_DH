/* for () */

for (let i= 1; i <= 10; i++) {
    console.log ('el valor de i es igual a ' + i);
};

for (let vuelta = 1; vuelta <= 5; vuelta ++) {
    console.log ('Dando la vuelta número ' + vuelta);
};

/* EJERCICIOS PLAYGROUND */

// La computadora repite por nosotros

function imprimirAzul4() {
    for (let i = 0; i < 4; i++) {
        console.log ('Azul');
    }
}

    console.log (imprimirAzul4());


// Hagamos una más

function pasandoPorI() {
    for (let i = 0; i<=4; i++){
        console.log ('acá i tiene el valor de ' + i);
    }
}

console.log (pasandoPorI());

// Contar impares

function noParesDeContarImparesHasta(numero) {
    let contador=0
    for (let i=0; i <= numero; i++) {
        if ((i % 2) != 0)  {
            contador += 1;
        }
    } 
    return contador;
}

console.log (noParesDeContarImparesHasta(7));