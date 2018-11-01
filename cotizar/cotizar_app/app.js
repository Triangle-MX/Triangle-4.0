// App + Data
var cotizarApp = new Vue({

});

// App Functions

// Cotizar
console.log("CONFIRMATION: APP 'cotizarAPP' IS RUNNING")

var type;
var adicional;

function cotizar(type, adicional){
    var precioBase = 2500;
    var precioTotal;
    
    // TYPES: 1 Página Web, 2 Blog, 3 E-Commerce
    var páginaWeb = 2500;
    var blog = 4000;
    var eCommerce = 5000;
    var modifier;
    
    if(type === 1){
        modifier = páginaWeb;
    } else {
        if(type === 2){
            modifier = blog;
        } else {
            modifier = eCommerce;
        };
    };

    precioTotal = precioBase + modifier + adicional;
    
    console.log("El costo base del proyecto sería de $" + precioTotal + "MXN.")
}
