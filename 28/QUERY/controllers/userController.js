let userController = {
    'register' : function (req,res) {
        res.render('register');
    },
    'login' : function (req,res) {
        res.render('login')
    },
    'list' : function (req,res) {
        let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'}
        ]
        res.render('userList', {'users': users}) /* para poder requerir una variable en el views, hay que agregarla al render, dandole un nombre (en este caso " 'users' ")*/
    },
    search: function(req,res) {
        let loQueBuscoElUsuario= req.query.search; //se le puede decir a req.query que parte del query queremos ver (en este caso 'search')
        let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'}
        ];

        let usersResults= [];

        for (let i = 0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i]);
            }
        }

        res.render('userResults',{usersResults: usersResults})
    }
};

module.exports= userController;