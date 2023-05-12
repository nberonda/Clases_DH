
/* EN ./routes/productos.js */
router= express.Router();

router.get ('/pelicula/crear', (req,res) => {res.render('crear')});

router.post ('/pelicula/crear', (req,res) => {
    console.log(req.body);

    res.redirect('/peliculas'); /* despues de implementada la logica se usa este metodo redirect() sobre response para cerrar el ciclo y que el servidor haga un redireccionamiento de ser necesario. */
    /* En el caso de la pelicula, luego de la creacion se redirige al usuario al listado */
});

// los nombres de las rutas pueden ser iguales porque cada una está implementando un método diferente

//en el caso de querer  agregar una pelicula, tendriamos que crear una ruta que muestre el formulario de creacion y una que se encargue de procesar la informacion.

express= require('express')
app=express();

/* EN app.js */
/* Para capturar la informacion hay que agregar estas 2 lineas en app.js */

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
