let fs = require('fs');

/* console.log(fs); */

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

/* console.log (datos); */

let moment = require('moment');

console.log(moment().format('MMM Do YYYY'));

let heroes = require('./superheroes');

console.log (heroes);