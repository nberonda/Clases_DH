// npm i cookie-parser

// para crear una cookie se ejecuta el metodo cookie() en response, pasandole argumentos nombre y valor

res.cookie('Nombre', 'Valor');

//para leer la info de una cookie: req.cookies.club ej:

console.log(req.cookies.nombre)

//ejemplo

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	//cookie que registra cuando se ingreso por ultima vez
	res.cookie('ultimoAcceso', new Date)
	
}

// ejercicio 1

const index2 = (req, res) => {
	let estilo;
	if (req.cookies.estilo) {
		estilo = req.cookies.estilo
	} else estilo = "default"
	//Agregá el if elses acá

	res.render('/', {estilo: estilo});

	//Código del controlador
}

// ejercicio 2

const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}

const recomendados = (req, res) => {
	//Tu código acá
	const preferencias = req.cookies.preferencias

	const productos = listadoProductos[preferencias]

	console.log(productos)
	res.render('/recomendados', {productos: productos})
}