express= require('express')
app=express();

/* EN ./routes/productos.js */
router= express.Router();

router.post('/register' , userController.create);
router.get('login', userController.login);
router.get('/list',userController.list);
router.get('/search', userController.search);
router.get('/edit/:idUser', userController.edit);

router.get ('/:id/editar', usuariosController.editar);
router.get ('/:id/actualizar', usuariosController.actualizar);

router.put ('/edit', (req,res) => {
    res.send('Fui por PUT!')
});

router.delete ('/delete/:userId', function(req,res) {
    res.send("SOY UN DELETE!");
});

/* EN app.js */

// se necesita una dependencia de node, para poder usar los metodos put y delete.
// la misma se llama "method-override" y es necesario requerirla en app.js:

const methodOverride = require('method-override');

app.use(methodOverride('_method'));