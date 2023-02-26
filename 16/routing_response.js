
const express = require('express');
const path= require('path');
const app = express();

app.listen(3000, () => {
    console.log ('Servidor Corriendo');
});

// localhost:3000/home 

app.get('/home', function (req, res) {
    res.send ("Hola, estamos en el home");
});

//se puede enviar informacion en otros formatos, como un array o un objeto

app.get ('/un-array', function (req, res) {
    res.send ([1, 2, 3, 4]);
});

app.get ('/un-objeto', function (req, res) {
    res.send ({
        nombre: 'Nicolás', 
        apellido: 'Beronda', 
        edad: 20
    });
});

let saludo = "Bienvenido/a, ahora estamos en tu perfil";

app.get ('/perfil', function (req, res) {
    res.send(saludo);
});

//ruta GET agregar producto

const producto= {
    tipoProducto: null,
    precio: null,
    cantidad: null
};

app.get ('/producto/agregar', function (req, res) {
    res.send(producto);
});