const { validationResult } = require('express-validator');

storeUser: (req,res) => {
    let errores = validationResult(req);
    if (errores.isEmpty()) {
        let user = req.body;
        userId = usersModel.create(user);
        res.redirect('/users/' + userID);
    } else{
        res.render ('users/create', {
            errores: errores.array(),
            old: req.body
        });
    }
};

