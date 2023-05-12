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
    },
    'edit' : function (req,res) {
        let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'}
        ];

        let userToEdit= users[idUser];
    }
};

module.exports= userController;