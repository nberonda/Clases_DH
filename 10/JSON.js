let persona = {
    nombre : 'Carli',
    edad: 26,
    domicilio: 'Calle falsa 123'
};

console.log (persona);

let personaJSON = JSON.stringify(persona); // convierte el objeto o arrray en un string

console.log (personaJSON);

let personaOriginal = JSON.parse (personaJSON); // convierte el string en el objeto original

console.log (personaOriginal);

// otro ejemplo

let amigos = ['Coco', 'Pablito', 'Sus', 'Franco'];

console.log (amigos);

let amigosJSON = JSON.stringify(amigos);

console.log (amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON);

console.log (amigosOriginal);