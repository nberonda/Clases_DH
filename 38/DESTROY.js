// en moviesController

let db = require("../database/models");

let moviesController = {
    list: function (req,res) {
        db.Peliculas.findAll()
            .then(function (peliculas) {
                res.render(peliculas);
            });
    },
    delete: function (req,res) { //elimina registros de nuestra base de datos
        db.Peliculas.destroy({ // se puede crear un boton que haga esta funcion en el html
            where:{ id: req.params.id }
        })
        res.redirect('/movies')
    }
}

// en router

let express= require("express");
let router= express.Router();

router.get("/edit/:id", moviesController.edit);

router.post("/delete/:id", moviesController.delete);

// EJERCICIO 1

const Pelicula = require('model/pelicula.js');

Pelicula.destroy({
    where: {id: 3}
});

// EJERCICIO 2

const Usuario = require('model/usuario.js');

Usuario.destroy({
    where: {email: "kenny@south-park.com"}
});

// EJERCICIO 3

/* vamos a eliminar a todos los usuarios cuyo proveedor de correo sea aol.com. Es decir, aquellos cuyo email termine en "@aol.com" */

const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy({
    where:{
        email: {[Op.like]: '%aol.com'}
    }
});