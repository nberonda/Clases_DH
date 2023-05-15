module.exports = (sequelize, dataTypes) => {
let alias= "Peliculas";
let cols= {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: dataTypes.STRING
    },
    length: {
        type: dataTypes.INTEGER
    }
};
let config = {
    tableName: "movies", //sequelize infiere automaticamente que el nombre de la tabla es el plural del nombre del archivo del modelo, en este caso al llamarse distinto es necesario aclararlo
    timestamps: false
}

    const Pelicula = sequelize.define(alias, cols, config);

    return Pelicula;
}