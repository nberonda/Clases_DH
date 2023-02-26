/* CALLBACK */

function nombreCompleto(nombre, apellido) {return nombre + ' ' + apellido};

function saludarCompleto(nombre, apellido) {
    return 'Hola, ' + nombreCompleto(nombre, apellido) + '!';
};

console.log (saludar('Nicolás','Beronda'));

function iniciales(nombre, apellido) {
    return nombre[0] + apellido[0]
};

function saludarIniciales(nombre, apellido)  {
    return 'Hola, ' + iniciales(nombre, apellido) + '!';
};

console.log (saludarIniciales('Nicolás','Beronda'));

function saludar (nombre, apellido, callback) {
    return 'Hola, ' + callback(nombre, apellido) + '!';
};

console.log (saludar('nicolás', 'Beronda', saludarCompleto));

console.log (saludar('nicolás', 'Beronda', saludarIniciales));