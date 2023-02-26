let cursada = {
    curso: 'Fullstack',
    turno: 'Mañana',
    sede: 'Belgrano'
};

let estudianteUno= {
    nombre: 'Denise',
    email: 'denise@gmail.com',
    ...cursada
};

let estudianteDos= {
    nombre: 'Javier',
    email: 'javi@gmail.com',
    ...cursada
};

console.log (estudianteDos);

function conVariosParametros(){};


//ejemplo

let peliculasAccion = ['End Game', 'Iron Man 3', 'Capitán América'];
let peliculasComedia = ['Mi Pobre Angelito', '¿Que pasó ayer?'];

let peliculas = [peliculasAccion, peliculasComedia];

console.log (peliculas);

let peliculas2 = [...peliculasAccion, ...peliculasComedia]; 
//sirve para unificar los datos de mas de un array

console.log (peliculas2);

let generoComedias = {
    nombreGenero: 'Comedia',
    popularidad: 3
};

let miPobreAngelito = {
    nombre: 'Mi Pobre Angelito',
    duracion: 120,
    ...generoComedias
};

let quePasoAyer= {
    nombre: 'Que Paso Ayer?',
    duracion: 110,
    ...generoComedias
};

console.log (miPobreAngelito);
console.log (quePasoAyer);


function peliculasVistas(...nombresDePelicula) {
    for (let i = 0; i < nombresDePelicula.length; i++) {
        console.log ('La persona ya vió ' + nombresDePelicula[i]);
    };
};

peliculasVistas('End Game', 'Iron Man 3', 'Mi pobre angelito','¿Que Paso ayer?');