// Requerir y usar Express

const express = require('express');
const path= require('path');
const app = express();

// .get

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

// levantar un server, método listen

app.listen(3000, () => {
    console.log ('Servidor Corriendo');
});