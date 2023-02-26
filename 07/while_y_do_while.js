/* WHILE */

let vuelta = 1

while (vuelta <= 5) {  // se ejecuta hasta que la condicion deje de ser verdadera
    console.log ('Dando la vuelta número ' + vuelta);
    vuelta++;
};

/* DO WHILE */

let vueltas = 5

do{  //se ejecuta antes de la comrobación.
    console.log ('Dando la vuelta número' + vuelta);
    vuelta++
} while (vuelta <= 5); //al llegar a la vuelta 6 la condicion es falsa y termina el código

/* EJERCICIOS PLAYGROUND */

// Creando la tabla de multiplicar

function tablaDeMultiplicar(numero){
    let i=1
    while (i<=10) {
        console.log (numero + ' * ' + i + ' = ' + (numero * i));
        i++;
    }
}

console.log (tablaDeMultiplicar(5));