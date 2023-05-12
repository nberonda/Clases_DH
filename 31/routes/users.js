//aplicacion de middleware en ruta especifica

const express = require('express');
const router= express.Router();
const usersController = require('../controllers/usersController');
let logDBMiddleware = require('../middlewares/logDBMiddleware') //requerimos el middleware

router.get('/', function (req,res,next) {
    res.send ('respond with a resourse');
});

router.get ('/register', usersController.register);

router.post('/register', logDBMiddleware, usersController.store); //se agrega a los parametros del router.
//cada vez que se pase por esta ruta post, se va a usar el middleware dejando un log.

module.exports = router;

//EJERCICIO 2

const homeController = require('../controllers/homeController');
const estadisticasController = require('../controllers/estadisticasController');

//Creá tu función visitasMiddleware

function visitasMiddleware(req, res, next) {
    estadisticasController.contarVisita(req);

    next();
}

router.get('/home', visitasMiddleware, homeController.index); //Agregá la función visitasMiddleware como segundo parámetro de tu ruta

//EJERCICIO 3

const OldController = require('../controllers/OldController');

//Creá tu función redirigir
function redirigir(req,res,next) {
    res.redirect('/');

    /* next(); */
};

router.get('/ruta-en-desuso', redirigir, OldController.index); //Agregá la función redirigir como segundo parámetro de tu ruta