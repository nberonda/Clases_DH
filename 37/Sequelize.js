// Sequelize es un ORM que ayuda a conectarnos e interactuar con bases de datos relacionales, como pueden ser Postgres, MySQL o SQLite

// npm install sequelize@5.21

/* 
npm i sequilize-cli
npm i sequelize
npm i myslq2
 */

//una vez creado .sequelizerc: escribir "sequelize init" en la consola para crear la carpeta database y toda su configuracion

//EJERCICIO

'use strict';

module.exports = (sequelize, DataTypes) => {
    /* let columnas ={
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING(200)
        },
        descripcion:{
            type: DataTypes.TEXT
        },
        precio:{
            type: DataTypes.DECIMAL
        }
    } */
    let config= {
        tableName: 'productos',
        timestamps: false
    }
    const product = sequelize.define('Product', {
        id: DataTypes.INTEGER,
        nombre: DataTypes.STRING(200),
        descripcion: DataTypes.TEXT,
        precio: DataTypes.DECIMAL
    }, config);
 	return product;
};

//EJERCICIO 2

let db= require('../database/models')
 
const controller = {
  index: (req, res) => {
     return res.send('Listado de productos');
  }
}
 
module.exports = controller;

//EJERCICIO 3

const db = require('../database/models');
 
const controller2 = {
  index: (req, res) => {
     db.Product.findAll()
     .then((products) => {
       res.send(products)
     })
  }
}
 
module.exports = controller;

//EJERCICIO 4

const db = require('../database/models');
 
const controller3 = {
  index: (req, res) => {
     db.Product
        .findAll()
        .then(products => {
           return res.send(products);
        })
        .catch(err => {
           return res.send(err)
        })
  },
  porId: (req, res) => {
     db.Product.findByPk(req.params.id)
     .then((product) => {
        res.send(product)
     })
     .catch(function(error) {
        res.send(error)
     })
  }
}

//EJERCICIO 5

const db = require('../database/models');
const Op = db.Sequelize.Op;
 
const controller4 = {
  index: (req, res) => {
     db.Product
        .findAll()
        .then(productos => {
           res.send(productos);
        })
        .catch(err => {
           res.send(err)
        })
  },
 
  porId: (req, res) => {
     db.Product
        .findByPk(req.params.id)
        .then(producto => {
           res.send(producto);
        })
        .catch(err => {
           res.send(err)
        })
  },
  porPrecio: (req, res) => {
     db.Product
        .findAll({
           where: {
              precio: {[db.Sequelize.Op.gte] : 50000} //gte = greater than or equals
           },
           order: [['nombre', 'ASC']],
           limit: 10
        })
        .then(producto => {
           res.send(producto);
        })
        .catch(err => {
           res.send(err)
        })
  },
}
 
module.exports = controller;