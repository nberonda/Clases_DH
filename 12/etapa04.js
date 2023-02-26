let autosImportados = require('./autos.js');

let concesionaria = {
    autos: autosImportados,
    
    buscarAuto: function (patente) {
        for (i=0; i < this.autos.length; i++) {
            if (this.autos[i].patente === patente) {
                return this.autos[i];
            };
        };     
        return null;
    },

    venderAuto: function (patente) {
        if (this.buscarAuto(patente) != null) {
            return this.buscarAuto(patente).vendido = true,
            console.log (this.buscarAuto(patente));
        }
        else return console.log ('Patente No Existente')
        
    }
};

console.log (concesionaria.venderAuto('JJK116'));

console.log (concesionaria.venderAuto('ABC123'));