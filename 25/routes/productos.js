let express = require('express');

let router = express.Router();

const productosController = require ('../controllers/productosController');

router.get ('/:idProducto', productosController.detalle);

router.get ('/:idProducto/comentarios/idComentario?', productosController.detalleComentarios);


router.get ('/:idProducto', function(req,res) {
    res.send('Bienvenidos al detalle del producto ' + req.params.idProducto);
});

router.get ('/:idProducto/comentarios/', (req,res) => {
    res.send ('Bienvenidos a los comentarios del producto ' + req.params.idProducto);
});

router.get ('/:idProducto/comentarios/:idComentario?', (req,res) => {
    if (req.params.idComentario == undefined) {
        res.send ('Bienvenidos a los comentarios del producto ' + req.params.idProducto);
    } else {
        res.send ('Bienvenidos al comentario ' + req.params.idComentario + ' del producto ' + req.params.idProducto)};
});

router.get ('/crear', function (req,res) {
    res.send ('CreAR!')
});

module.exports = router;