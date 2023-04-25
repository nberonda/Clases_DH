let userController = {
    'register' : function (req,res) {
        res.render('register');
    },
    'login' : function (req,res) {
        res.render('login')
    },
    'list' : function (req,res) {
        let users = [
            'Dario',
            'Javier',
            'Maru',
            'Ale'
        ]
        res.render('userList', {'users': users}) /* para poder requerir una variable en el views, hay que agregarla al render, dandole un nombre (en este caso " 'users' ")*/
    }
};

module.exports= userController;