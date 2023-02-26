function elDoble (unNumero) {
    return unNumero * 2
}

elDoble(6)

console.log (elDoble(6))


/* Funcion expresada */

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}

console.log (sumar(7, 9));

/* Función declarada */

function restar(numeroC, numeroD) { 
    return numeroC - numeroD;
}

restar(10, 3);

/* ejemplo de scope */

let mensaje = 'Hola'; //scope global

function saludar(){
    return mensaje;
}
console.log (saludar());

function saludar2(){
    let mensaje = 'Chau'  //scope local
    console.log (mensaje) //lee scope local
    return mensaje
    
}

console.log (mensaje); //lee el scope global
console.log (saludar2());

/* ejercicio olla */

function sePoneLaOlla(diaDeLaSemana){
    if (diaDeLaSemana == 'Domingo') {
        return ('¡Pongamos la olla, hoy se comen pastas!');
    }   else {
            return ('Mejor lo dejamos para el domingo');
    }
}

console.log (sePoneLaOlla('Lunes'));

/* Funcion con switch */

function tengoClases(dia) {
	switch (dia) {
		case 'lunes', 'miercoles', 'viernes':
            console.log ('tenés clases');
    break;
        default:
            console.log ('no tenés clases');
    }
}

tengoClases('viernes')