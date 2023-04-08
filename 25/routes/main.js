let express= require('express');

let router= express.Router();

router.get ('/', function(req,res) {
    res.send ('Bienvenido al sitio!')
})

router.get ('/contacto', (req,res) => {
    res.send ('Informacion de contacto')
})

module.exports = router;