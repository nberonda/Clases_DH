//sin promesa:

registrarCompra(producto, function(producto) {
    console.log("compra registrada")
    sacarDeStock(producto, function() {
        console.log("stock actualizado")
        reponerProducto(producto, function() {
            console.log("Producto repuesto")
        })
    })
})

//Con promesas:

registrarCompra(producto)
//el .then solo se procesa cuando el codigo asincronico "regstrarCompra" haya terminado.
    .then(function() {      
        console.log("compra registrada")
    })
    .then(function() {
        console.log("stock actualizado")
        reponerProducto(producto);
    })
    .then(function() {
        console.log("Producto repuesto")
    })
    .catch(function(e) {
        console.log("Error!")
    })

//en este caso, las promesas estan concatenadas, y recien cuando se termine una se realizará la siguiente

//con un solo ".catch" se puede "atrapar" un error, de cualquiera de la promesas

let funcionesAsync = require('.funciones.js')

funcionesAsync.obtenerDatos()
    .then(function(resultado) {
        
        return funcionesAsync.filtrarMayoresDeEdad(resultado)
     //el return del primer .then es lo que pasa al siguiente .then
    })
    .then (function(filtrados) {
        console.log(filtrados)
    })
    .catch (function(error) {    //se muestra solo si un .then dio error
        console.log (error);
    })

// EJERCICIO 1

