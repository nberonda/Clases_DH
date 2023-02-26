/* METODOS DE STRINGS */

// .length

console.log ('Hola mundo'.length); //largo del string

// .indexOf

console.log ('Hola mundo'.indexOf('mundo')); 

console.log ('Hola mundo'.indexOf('perro'));

// .slice()

console.log ('Me Gusta JS'.slice(3, 8)); //corta un pedazo del string, .slice(desde, hasta)

// .trim()

let string = '         Soy un ser humano         ';

console.log (string);
let nuevoString= (string.trim());

console.log (nuevoString); // Antes y despues del primer y ultimo caracter alfanumerico, borra los espacios en blanco en un string

// .split()

let nuevoArray = nuevoString.split(' ');

console.log (nuevoArray); // convierte un string en array separando los valores contenidos en el mismo

// .replace()

let unString = 'Aguante Python';

console.log (unString);

let reemplazo = (unString.replace ('Python', 'JavaScript')); //cambia un valor dentro de un string

console.log (reemplazo);

/* EJERCICIOS PLAYGROUND */

// Completar URL

let elString = 'digitalhouse.com.ar'

function dominio(string) {
    return 'http://' + string;
}

console.log (dominio(elString));

// Contar caracteres

let texto = 'hola mundo!';

console.log (texto.length);

// Reemplazo fast fast

function reemplazoFastFast(frase, palabra1, palabra2) {
    return frase.replace(palabra1, palabra2);
}

console.log (reemplazoFastFast('Este texto es mala onda','mala','buena'));

// ¿Están hablando de mi?

function menciona(texto, palabra) {
    return texto.indexOf(palabra) != -1;
};

console.log (menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'));

// Solo el nombre

let frase1 = '¡Hola!, soy Carli'

let licenciada= frase1.slice(12,18);

console.log (licenciada);