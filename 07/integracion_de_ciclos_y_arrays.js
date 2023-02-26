// Sumatorias - Parte 3

function gananciaTotal4(unPeriodo){
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    sumatoria = sumatoria + unPeriodo[2];
    sumatoria = sumatoria + unPeriodo[3];
    return sumatoria;
};

console.log (gananciaTotal4([1,1,1,1]));

// Sumatorias - Parte 4

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

console.log(gananciaTotal([2, 10, -20]));

// Conteos

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i=0; i < unPeriodo.length; i++) {
            let mes = unPeriodo[i];
                if (mes > 0) cantidad++;
        }; 
    return cantidad;
};


console.log (cantidadDeMesesConGanancia([1,6,7,-5,-8,4,-6]));

// Filtrados

function saldosDeMesesConGanancia(unPeriodo) {
    let saldos = [];
    for (let i=0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        if (mes > 0) saldos.push (unPeriodo[i]);
    };
    return saldos;
};

console.log (saldosDeMesesConGanancia([100,20,0,-10,10]));

// Más conteos

function cantidadDeMesesConPerdida(unPeriodo) {
    let perdidas = 0
    for (let i=0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        if (mes < 0) perdidas++;
    };
    return perdidas;
};

console.log (cantidadDeMesesConPerdida([1,-2,50,7,-9]))