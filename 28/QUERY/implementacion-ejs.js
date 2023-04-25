const express = require('express');
const path = require('path');
const app = express();

let rutasUsers = require('./routes/users')

app.set ('view engine', 'ejs') /* el metodo set permite definir cofiguraciones de Express. Recibe 2 strings como parametros : primero lo que queremos configurarl, seguido del valor de la configuracion.*/

/* app.set ('views', './views') */; /* este paso es opcional si se utiliza la carpeta por defecto */
/* se usa para cambiar nombre o ubicacion de la carpeta */

/* todos los archivos ejs van en la carpeta views */

app.use(express.static('public')); /* configura el acceso a la carpeta de recursos estáticos */

app.get ('/', (req, res) => {
    res.render('register')
})

app.use ('/users', rutasUsers);

app.listen (3000, () => {
    console.log ('http://localhost:3000')
})