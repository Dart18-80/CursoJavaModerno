let pestaña = 'Pestaña 1';
console.log(pestaña);

const carrito = new Set();

carrito.add('Camisa');
carrito.add('Pantalon');
carrito.add('Calcetin');
carrito.add('calcetin');

console.log(carrito);

carrito.delete('calcetin');

carrito.forEach((producto, index, pertenece) =>{
    console.log(producto);
    console.log(index);
    console.log(pertenece);
})

console.log(carrito);

console.log(carrito.has('Guitarra'));

console.log(carrito.size);

carrito.clear();

console.log(carrito);

const numeros = [10,20,30,40,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);