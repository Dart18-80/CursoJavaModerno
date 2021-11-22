numero = "App 6";
console.log(numero);

//Acceder a propiedades de forma distinta de los objetos
const { nombre, informacion: { fabricacion, fabricacion: { pais } }, informacion } = carro

console.log(nombre);
console.log(fabricacion);
console.log(informacion);
console.log(pais);