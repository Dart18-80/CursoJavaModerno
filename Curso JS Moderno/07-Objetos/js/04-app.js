numero = "App 4";
console.log(numero);

console.log(producto);

const nombre1 = producto.nombre;
console.log(nombre1);

//Simplificar obtencion de objetos
/*
const { precio } = producto;
console.log(precio);

const { nombre } = producto;
console.log(nombre);
*/


const { nombre, precio, algo } = producto;
console.log(nombre);
console.log(precio);
console.log(algo);
