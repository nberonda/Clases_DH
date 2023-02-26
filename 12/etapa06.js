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
        
    },
    
    autosParaLaVenta: function() {
         let autosDisponibles = this.autos.filter(function(disponibles) {
            return disponibles.vendido == false;
        }); 
        return autosDisponibles;
    },

    autosNuevos : function() {
        let autosEnVenta = this.autosParaLaVenta();
        let autosCero = autosEnVenta.filter(function(nuevos) {
            return nuevos.km < 100;
        });
        return autosCero;
    }

};


console.log (concesionaria.autosNuevos());