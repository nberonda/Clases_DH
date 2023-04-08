const express = require('express');
const app = express();

let listas = {
    lista: series,

    buscarSerie: function (idSerie) {
        for (i=0; i < this.lista.length; i++) {
            if (this.lista[i].id === idSerie) {
                return this.lista[i]
            } else return undefined;
        }
    }
}

app.get ('/serie/:id', (req,res) => {
    let idSerie = req.params.id;
    /* let lista = series; */
    /* let buscarSerie = function (idSerie) {
        for (i=0; i < this.lista.length; i++) {
            if (this.lista[i].id === idSerie) {
                return this.lista[i];
            } else return undefined;
        } 
    }; */
    res.send (listas.buscarSerie(idSerie));
})