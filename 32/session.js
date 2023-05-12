// npm i express-session

const session = require('express-session'); //middleware Session

app.use(session({ secret: 'Nuestro mensaje secreto' })); // se configura como middleware global y se le da un argumento de obj literal, con la propiedad secret y un texto aleatorio para identificar el sitio web

