let laMitad = numero => numero / 2;

console.log (laMitad(8));

let dividir = (numeroA, numeroB) => numeroA / numeroB;

console.log (dividir(20,4));

let tengoQueTrabajar = dia => {
    if (dia == 'Sábado' || dia == 'Domingo'){
        return 'No tenes que trabajar';
    } else {
        return 'Si, tenés que trabajar';
    }
}

console.log (tengoQueTrabajar('Sábado'));

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}

console.log (horaActual());

let dameCinco = () => [1,2,3,4,5]

let multiplicarPorDos = () => 123 * 2 ;

let mostrarNombre = () => "Mi nombre es Hernán";