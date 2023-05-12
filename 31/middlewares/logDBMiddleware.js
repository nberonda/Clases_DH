const fs= require('fs');

function logDBMiddleware (req,res,next) {
    fs.appendFileSync('logDB.txt', 'Se creó un registro al ingresar en ' + req.url);

    next();
};

module.exports = logDBMiddleware;

//esto se exporta a la ruta especifica que quiera usarse (en este caso en ./routes/users)