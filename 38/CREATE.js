// /controllers/moviesController.js:

let db = require("../database/models");

let moviesController = {
    list: function (req,res) {
        db.Peliculas.findAll()
            .then(function (peliculas) {
                res.render(peliculas);
            });
    },
    create: function (req,res) {
        db.Peliculas.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            lenght: req.body.length
        });

        res.redirect("/movies");
    }
};


// EJERCICIO 1

const Usuario = require('model/usuario.js');

Usuario.create({
    nombre: 'req.body.nombre',
    email: 'req.body.email',
    password: 'req.body.password'
})

// EJERCICIO 2

const Pelicula = require('model/pelicula.js');

Pelicula.bulkCreate([
    {titulo: '1',
     genero: '1'
    },
    {titulo: '1',
    genero: '1'}
]);

//EJERCICIO 3

const Producto = require('model/producto.js');

const productoController = {
  create: (req, res) => {
    Producto.create({
      nombre: req.body.nombre,
      precio: req.body.precio
    })
  }  
}

