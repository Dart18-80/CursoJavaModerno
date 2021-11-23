pestaña = "App 6";
console.log(pestaña);

//Fomra declarativa de agregar objetos a un Arreglo

let resultado;

resultado = [...carrito, producto];

console.table(resultado);

resultado = [...resultado, producto2]
resultado = [producto3, ...resultado]

console.table(resultado);