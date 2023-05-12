const expresss = require('express');
const app= expresss();

const logMiddleware = require('./middlewares/logMiddleware');

// Aplicacion global middlewares

app.use(logMiddleware); //esto hará que el middleware LOG se use en toda la app.

//otro middleware comunmente usado es el error 404

app.use((req,res,next) => {
    res.status(404).render('404-page');
    next(); //la funcion next se encarga de ejecutar el proximo paso, si la pag existe llama al controlador y le devuelve la vista solicitada
});

//EJERCICIO

let enMantenimiento = false;

//Agrear el middleware aquí

app.use ((req,res,next) => {
    if (enMantenimiento != true) {
        res.render('en-mantenimiento')
    }else return next();
})