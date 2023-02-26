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
    }
};

console.log (concesionaria.buscarAuto('JJK116'));

console.log (concesionaria.buscarAuto('APL123'));

console.log (concesionaria.buscarAuto('patenteputo'))