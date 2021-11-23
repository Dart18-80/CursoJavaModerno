pestaña = "App 5";
console.log(pestaña);

const carrito = [];

const producto = 
{
    nombre: "Manzana",
    precio: 2,
}

const producto2 = 
{
    nombre: 'Sandia',
    precio: 5
}

const producto3 = 
{
    nombre: 'Fresa',
    precio: 1
}
//Forma imperativa

//Agrega al final del arreglo
carrito.push(producto);

console.table(carrito);

carrito.push(producto2);

console.table(carrito);

//Agrega al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);