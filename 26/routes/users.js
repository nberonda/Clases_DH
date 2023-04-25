let express= require('express');

let router= express.Router();

let userController = require('../controllers/userController')

/* GET users listing */

router.get ('/', function (req,res,next) {
    res.send('respond with a resourse');
});

/* /users/register */

router.get('/register', userController.register);

router.get('/login', userController.login);

router.get('/list', userController.list);

module.exports = router;