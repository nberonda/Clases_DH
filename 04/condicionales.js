/* IF */

let edad = 19;
let acceso = '';

if (edad < 16) {
    acceso = 'prohibido';
} else if (edad >= 16 && edad <= 18) {
    acceso = 'permitido sólo acompañado de un mayor';
} else {
    acceso = 'permitido';
}

console.log (acceso);

/* Switch */

let semaforo = 'verde'

switch (semaforo) {
    case 'verde':
        console.log ('avanzar');
    break;
    case 'amarillo':
        console.log ('precaucion');
    break;
    case 'rojo':
        console.log ('pare')
    break;
    default:
        console.log ('el semaforo no funciona')
}

/* IF Ternario */

let elMayor = 4 > 10 ? "el 4 es mayor" : 'El 10 es mayor';

console.log (elMayor)