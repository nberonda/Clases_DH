// en moviesController

let db = require("../database/models");

let moviesController = {
    list: function (req,res) {
        db.Peliculas.findAll()
            .then(function (peliculas) {
                res.render(peliculas);
            });
    },
    edit: function (req,res) {
        db.Peliculas.findByPk(req.params.id)
            .then(function (pelicula) {
                res.render("editarPelicula", {pelicula:pelicula});
            })
    },
    update: function (req,res) {
        db.Peliculas.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            lenght: req.body.length
        }, {
            where: {
                id: req.params.id
            }
        });

        res.reditect("/movies/edit" + req.params.id);
    }
}

// en router:
let express= require("express");
let router= express.Router();

router.get("/edit/:id", moviesController.edit);

router.post("/edit/:id", moviesController.update)

// EJERCICIO 1

const Producto = require('model/producto.js');

Producto.update({
    precio: 1234
}, {
    where: {
        id: 1
    }
});

// EJERCICIO 2

/* actualizar más de un registro, cambiar el valor de la columna "genero" de todas aquellas series cuyo género sea igual a "comedia" y reemplazarlo por el valor "sitcom". */

const Serie = require('model/serie.js');

Serie.update({
    genero: "sitcom"
}, {
    where: {
        genero: "comedia"
    }
});