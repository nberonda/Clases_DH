const express = require('express');
const path = require('path');
const app = express();

app.set ('view engine', 'ejs') /* el metodo set permite definir cofiguraciones de Express. Recibe 2 strings como parametros : primero lo que queremos configurarl, seguido del valor de la configuracion.*/

app.set ('views', './carpeta-de-vistas'); /* este paso es opcional si se utiliza la carpeta por defecto */
/* se usa para cambiar nombre o ubicacion de la carpeta */

/* todos los archivos ejs van en la carpeta views */