// npm install express-validator

const { body } = require('express-validator');

const validaciones = [                    //middleware que se encarga de validar la informacion
    body('nombreComleto').notEmpty(),     //antes de enviarla al controlador
    body('correoElectronico').notEmpty().isEmail(), //se puede aclarar que tiene que ser un mail valido
    body('contraseña').notEmpty().isLength({ min: 8, max: 18}).withMessage('Debes completar el campo'), 
    //se puede agregar un  largo minimo a la contraseña, o un mensaje
];

router.post('/registro', validaciones, controlador.registrar);
//se pasa el middleware a la ruta que lo va a usar

//las validaciones deben llevar el nombre del campo a validar que llevan en HTML. ej:

/* <form action=/registro method=post>
        <label for='name'> Nombre; </label>
        <input type=text name="name" id=name>
    </form>

    la validacion de este form será:

    validacion= [
        body('name').notEmpty().withMessage('Debes completar el campo')
    ]

    lleva el parametro name ya que el name del input era "name"
*/

const validacion = [
    body('correoElectronico')
        .notEmpty().withMessage('Debes completar el email').bail()
        /* .bail() sirve para cortar la validacion y que el usuario no reciba todos los errores juntos,
        en lugar se solo recibir el que corresponda */
        .isEmail().withMessage('Debes completar con un email valido')
]