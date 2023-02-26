let curso = { //objeto
    cantidaddeAlumnos: 32,              //propiedades
    docentes: ['Nacho', 'Javier'],      //propiedades
    horario: 'de 19 a 21hs.',           //propiedades
    notificaciones: function () {
        return 'El horario de la cursada es ' + this.horario;
    }
};

console.log(curso); //muestra todas las propiedades del objeto

console.log('la cantidad de alumnos de este curso es de ' + 
curso.cantidaddeAlumnos);          //muestra una propiedad especifica del objeto

console.log (curso.notificaciones());

let miPais = {
    nombre: 'Argentina',
    poblacion: 44009200,
    capital: 'Buenos Aires',
    decirNacionalidad: function () {
        return 'Yo nací en ' + this.nombre; //this hace referencia a este mismo objeto
  }
};

console.log (miPais.decirNacionalidad());


// Constructor de objetos

function Auto(laMarca,elModelo) { //el nombre de la funcion constructora debe iniciar con mayuscula
    this.marca = laMarca;
    this.modelo = elModelo;
};

let miAuto = new Auto('Peugeot', 207);
let miOtroAuto = new Auto ('Chevrolet', 'Corvette');

function Curso(cantidadDeAlumnnos, docentes, horario) {
    this.cantidadDeAlumnnos = cantidadDeAlumnnos;
    this.docentes = docentes;
    this.horario = horario;
};

let cursoDeProgramacion = new Curso(28,['diego', 'gerardo'], 'de 19 a 21hs.');
let cursoDeMarketing = new Curso(45, ['Javier','Debbie'], 'de 17 a 19hs.');

console.log (cursoDeProgramacion);
console.log(cursoDeMarketing);

// Utilizando los métodos de los objetos

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantidadDeHoras) { return this.energia -= (cantidadDeHoras*5),
    this.experiencia += (cantidadDeHoras*2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
