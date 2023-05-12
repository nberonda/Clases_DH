//npm i bcryptjs

//se usapara encriptar datos, como contraseñas.

const bcrypt = require('bcryptjs')

let passEncriptada = bcrypt.hashSync('monito123', 10); 
/* se usan 2 parametros, el dato a encriptar y los datos añadidos, denominados "sal", que hacen que los hash sean mas dificiles de romper.
Se suele pasar como valor para la sal 10 o 12 */

//para comparar un texto plano con un hash, para saber si coinciden, se usa .compareSync

let check = bcrypt.compareSync('monito123', passEncriptada) 
//se pone el texto plano primero y el hash a comparar en el segundo valor.

console.log(check);  // esto deberia dar true si passEncriptada es igual a "monito123"

