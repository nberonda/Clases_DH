let seriesFavoritas = ['breaking bad', 'Star Wars', 'Game Of Thrones'];

console.log(seriesFavoritas); /* mostrar todo el array */

console.log (seriesFavoritas[2]); /* mostrar un dato especifico del array */

console.log (seriesFavoritas.length); /* mostrar cantidad de datos en el array */

/* METODOS DE ARRAYS I */

let colores =  ['Azul', 'Blanco', 'Rojo', 'Verde'];

/* Metodo push */

colores.push ('Violeta', 'Amarillo'); // Metodo push: agrega elementos al array

console.log (colores);

/* Metodo pop */

let nombres = ['Nicolas', 'alejandro'];

let elUltimo= nombres.pop (); // saca el ultimo elemento del array y lo guarda en elUltimo

console.log (nombres, elUltimo);

/* Metodos shift y unshift  */

let apellidos = ['Beronda', 'Cardoso'];

let elPrimero = apellidos.shift(); // saca el primer elemento del array y lo guarda en elPrimero

console.log (apellidos, elPrimero);

apellidos.unshift ('Beronda'); //inserta datos al principio del array

console.log (apellidos);

/* Metodo indexOf */

console.log (colores)

console.log (colores.indexOf ('Rojo')); // Devuelve la posicion del elemento dentro del array

console.log (colores.indexOf ('Perro')); // Si no existe el elemento dentro del array, devolverá "-1"

console.log (colores.lastIndexOf('Violeta')) // igual, pero busca desde el ultimo elemento al primero

/* Otro ejemplo indexOf y lastIndexOf */

let notas = [1, 2, 8, 4, 5, 8, 8, 4, 8];

let posicionDelOcho = (notas.indexOf(8));

let ultimaPosicionDelOcho = (notas.lastIndexOf(8));

if (posicionDelOcho != -1) {
    console.log ('Encontré el 8!');
} else {
    console.log ('No encontré el 8 :c');
}

/*  Metodo join */

let diasEntreSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

console.log (diasEntreSemana.join()); // unifica todos los elementos del array en un string

console.log (diasEntreSemana.join(' - ')); // se puede cambiar la coma que separa los elementos por otra cosa

/* EJERCICIOS PLAYGROUND */

// Join()

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];

  let fraseNueva = (arrayFrase.join(' '));

  console.log (fraseNueva);

// pop()

let alumnos = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];

  let alumnoEgresado = alumnos.pop();

  console.log (alumnos);
  console.log (alumnoEgresado);

  // push()

  let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
estudiantes.push ({
    nombre: 'Juan',
    promedio: 5,
    curso: 'iOS',
});  

estudiantes.push ({
    nombre: 'Miguel',
    promedio: 2,
    curso: 'Android',
});

console.log (estudiantes);

// shift()

let cursantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]

console.log(cursantes);

let cursanteDeBaja = cursantes.shift();

console.log (cursantes);
console.log (cursanteDeBaja);

// unshift()

let escolares = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]

  escolares.unshift (
    {
    nombre: 'Mariana',
    promedio: 9,
    curso: 'Full Stack',
    }
  );

  escolares.unshift (
    {
    nombre: 'Francisco',
    promedio: 2,
    curso: 'Android',
    }
  )

console.log (escolares);