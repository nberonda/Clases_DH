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
            return this.buscarAuto(patente).vendido = true
        }
        else return console.log ('Patente No Existente')
        
    },
    
    autosParaLaVenta: function() {
         let autosDisponibles = this.autos.filter(function(disponibles) {
            return disponibles.vendido == false;
        }); 
        return autosDisponibles;
    },

    autosNuevos: function() {
        let autosEnVenta = this.autosParaLaVenta();
        let autosCero = autosEnVenta.filter(function(nuevos) {
            return nuevos.km < 100;
        });
        return autosCero;
    },

    
    listaDeVentas: function() {
        let autosVendidos= this.autos.filter(function(vendidos) {
            return vendidos.vendido == true;
        });
        let ingresos = []
        autosVendidos.map(function(auto) {
            return ingresos.push(auto.precio);
        });
        return ingresos;
    },

/*     totalDeVentas: function() {
        let listaDeIngresos= this.listaDeVentas();
        if (listaDeIngresos.length > 0) {
            let ingresosTotales= listaDeIngresos.reduce (function(total, ingreso) {
                return total + ingreso;
            });
        return ingresosTotales;
        }else return null;
    }, */

    totalDeVentas: function () {
        let total = this.listaDeVentas().reduce((acum, ingreso) =>{
        return acum + ingreso;
        }, 0);
        return total;
    },

    puedeComprar: function(auto, persona) {
        let cuota = auto.precio / auto.cuotas;
        if (auto.precio <= persona.capacidadDePagoTotal && cuota <= persona.capacidadDePagoEnCuotas) {
            return true
        }else return false;
    },
};



console.log(concesionaria.puedeComprar(concesionaria.buscarAuto('APL123'), {nombre: 'Juan',capacidadDePagoEnCuotas: 20000,capacidadDePagoTotal: 100000}));