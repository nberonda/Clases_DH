/* EN ./routes/productos.js */

router.get ('/', productosController.mostrarTodos);
router.get ('/:id', productosController.mostrarPorId);
router.get ('/crear', productosController.crearProducto);

//el primer parametro es un string que especifica el recurso a visitar y el 2do parametro un callback del controlador

/* en ./controllers/productosController */

const controller = {
    mostrarTodos: (req,res) => {
        //logica a implementar
    },
    mostrarPorId: (req,res) => {
        //logica a implementar
    },
    crearProducto: (req,res) => {
        //logica a implementar
    },
};

module.exports = controller;

/* QUERY STRINGS */

// htps://www.amazon.es/autores?lang=es&keyword=borges

//                             ?lang=es&keyword=borges es un query string, conformado por claves y valores que se separan con el '&', se especifica el inicio con un '?'

//para acceder a un query string se usa:

/* req.query */

