let express = require('express');

let router = express.Router();

const productosController = require ('../controllers/productosController');

router.get ('/:idProducto', productosController.detalle);

router.get ('/:idProducto/comentarios/idComentario?', productosController.detalleComentarios);

module.exports = router;

router.get ('/', productosController.index);