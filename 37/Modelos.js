//modelo: se crea un archivo en la carpeta models

module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Usuarios', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: '',
    }, {
        tableName: 'UsuariosVIP' 
        //este paremetro es opcional, si la tabla se llama igual que el modelo no es necesario aclararlo
    });

    return Usuario;
}