const express = require('express');
const path = require('path');
const app = express();

let rutasProductos = require('./routes/productos')
let rutasMain = require('./routes/main.js')

app.use ('/', rutasMain)

app.use ('/productos', rutasProductos);

app.listen (3000, () => {
    console.log ('funka http://localhost:3000');
});