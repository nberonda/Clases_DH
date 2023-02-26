// destructuring de arrays

let colores = ['blanco', 'celeste', 'amarillo', 'rojo', 'negro'];

let [colorBlanco, colorCeleste, colorAmarillo] = colores; 
// separa los datos dentro del array original, siguiendo el mismo orden ya establecido

console.log (colores);

console.log (colorAmarillo);

console.log (colorCeleste);

console.log (colorBlanco);

// destructuring dentro de un objeto literal

let persona = {
    nombre: 'Denise',
    edad: 23,
    profesion: 'Programadora',
    seriesFavoritas: ['Breaking Bad', 'Game of Thrones', 'Friends']
};

let {nombre, profesion} = persona; 
// separa los datos en un nueva variable con el mismo nombre que el dato

console.log (persona);

console.log (nombre);

console.log (profesion);