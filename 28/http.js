//Require de Express
const express= require('express');
//Ejecucion de Express
const app=express();
//implementacion del metodo
app.METHOD();   /* tambien se puede en el sistema de rutas, router.METHOD() */

/* Solo las rutas que usen el metodo GET pueden verse desde el navegador */
/* POST envia datos al servidor, ejemplos son crear productos y realizar una compra.
es mas seguro que GET, yya que la informacion de POST se encuentra oculta.
Ademas, los pedidos POST no pueden se Cacheados ni guardados.*/
/* PUT se usa para reemplazar informacion ya presente en el servidor */
/* DELETE se usa para borrar datos presentes en el servidor */

/* EJERCICIO: */

let express= require('express');

let router= express.Router();

router.get ('/peliculas', (req,res) => {
    res.send("Listado de películas");
});