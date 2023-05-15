/* findAll, findByPk, findOne */

//los pedidos a bases de datos son asincronicos, y se realizan usando .then

//en el controller:

let db = require('../database/models')

let moviesController = {
    list: function(req,res) {
        db.Peliculas.findAll()  // hace un "SELECT *" dentro de la tabla
            .then (function(peliculas) {
                res.render("listadoDePeliculas", {peliculas:peliculas}) //muestra el resultado del SELECT
            })
        //con "db.Peliculas" se le indica al controller que queremos usar la base de datos, que ya fue aclarada en database/models
    },
    detail: function(req,res) {
        db.Peliculas.findByPk(req.params.id) // hace un "SELECT req.params.id"
            .then(function (pelicula) {
                res.render("detallePelicula", {pelicula:pelicula}); //muestra el resultado individual del SELECT
            })
    },
    one: function (req,res) {
        db.Peliculas.findOne ({ //se usa para encontrar resultados que coincidan con los atributos indicados
            where: {
                name: 'Toy Story'
            }
        }).then ((pelicula) => {
            console.log(pelicula)
        })
    },
    like: function (req,res) {
        db.peliculas.findAll({
            where: {
                name:{ [Op.like]: "%s%"} //busca todas las peliculas que incluyan la letra S en su nombre
            }
        }).then((peliculas) => {
            console.log(peliculas)
        })
    },
    top: function (req,res) {
        db.peliculas.findAll({
            where: {
                rating: {[db.Sequelize.Op.gt] : 8}  //acá estoy  buscando todas las que tengan un rating mayor a 8, con el operador gt(Greater than) del Sequelize
            }
        }).then (function (peliculas) {
            console.log(peliculas)
        })
    },
    order: function(req,res) {
        db.peliculas.findAll({
            order: [
                ['nombre', 'ASC'] //el primer valor es la columna a ordenar, y el segundo valor es el criterio de ordenamiento
            ]
        }).then (function (peliculas) {
            console.log(peliculas)
        })
    },
    limit: function(req,res) {
        db.peliculas.findAll({
            limit: 10 //limita la cantidad de resultados
        }).then (function (peliculas) {
            console.log(peliculas)
        })
    },
    offset: function(req,res) {//sirve para omitir resultados
        db.peliculas.findAll({
            offset: 10 //omite los primeros 10 resultados
        }).then (function (peliculas) {
            console.log(peliculas)
        })
    },
    orderLimitOffset: function (req,res) { //pueden usarse todos los metodos juntos
        db.peliculas.findAll({             //pasandolos como parametros al findAll()
            order: [['nombre', 'asc']],
            offset: 5,
            limit: 10
        })
    }
}

module.exports = moviesController;