// Sumatorias de bajo importe

function sumatoriaBajoImporte(unPeriodo) {
    let GananciasBajoImporte = 0
    for (i=0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        if (mes < 1001 & mes > 0) GananciasBajoImporte += mes;
    };
    return GananciasBajoImporte;
};

console.log (sumatoriaBajoImporte([1,10,100,1050,1000,-100]));

// Entradas para el cine

function asientosDisponibles(asientosVacios, asientoElegido) {
    if (asientosVacios.indexOf(asientoElegido) != -1) {
        return ('Felicitaciones, el asiento número ' +
         asientoElegido + ' está disponible');
    } else {
        return('Lo sentimos, el asiento número ' + asientoElegido + 
        ' está ocupado, pero aún quedan ' + asientosVacios.length + ' asientos disponibles'); 
    
    };
};

console.log (asientosDisponibles([15, 28, 44, 45, 70],28));
console.log (asientosDisponibles([15, 28, 44, 45, 70],4));

function asientosDisponibles2(vacios, elegido) {
    if (vacios.includes (elegido)) {
        return console.log ('Felicitaciones, el asiento número ' +
        elegido + ' está disponible');
   } else {
       return console.log ('Lo sentimos, el asiento número ' + elegido + 
       ' está ocupado, pero aún quedan ' + vacios.length + ' asientos disponibles'); 
   };
};

console.log (asientosDisponibles2([15, 28, 44, 45, 70],28));
console.log (asientosDisponibles2([15, 28, 44, 45, 70],4));

// Control de pasajeros

function reporteDePasajeros(estacionesRecorridas) {
    let cantidadDePasajeros = 200;
    let estacion= [];
    let pasajerosQueSuben;
    for (i=0; i < estacionesRecorridas+1; i++) {
        if (i >= 5) {
            pasajerosQueSuben = (20 * i) + 20;
        } else {
            pasajerosQueSuben = (20*i)
        };
        cantidadDePasajeros= 200 + pasajerosQueSuben;
        estacion.push ("En la estación " + i + ' hay ' + cantidadDePasajeros +
    " pasajeros arriba del tren");
    } return estacion;
}; 
console.log (reporteDePasajeros(8));

//La clave secreta

let clave = [];

function laClaveSecreta(frase) {
    let clave= frase.reverse();
    while (clave.includes('*')){
        clave.splice(clave.indexOf('*'),1);
        };
    return clave.join('');
};


console.log (laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í",
 "*", "d", " ", "l", "*", "E", "*"]));
//

function laClaveSecreta2(frase) {
    while (frase.includes("*")){
        frase.splice(frase.indexOf("*"),1);
    };
    let clave= [];
    let largo= frase.length
    for (let i = largo -1; i >= 0; i--) {
    clave += frase[i];}
    return clave;
};

console.log (laClaveSecreta2([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í",
 "*", "d", " ", "l", "*", "E", "*"]));