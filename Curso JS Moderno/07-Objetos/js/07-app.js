numero = "App 7";
console.log(numero);


// Si el objeto esta de clararo como tipo const sus propiedades aun asi se pueden modificar
const productos = 
{
    nombres:"Monitor 20 pulgadas",
    precios: 300,
    dispo: true
}

productos.dispo = true;

delete productos.precios;

console.log(productos);