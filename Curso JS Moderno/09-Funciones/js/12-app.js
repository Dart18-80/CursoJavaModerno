pestaña = "App 12";
console.log(pestaña);

const carrito = 
[
    {nombre: "Super Mario Bros", precio: 500},
    {nombre: "Mario Kart 8", precio: 600},
    {nombre: "Metroid", precio: 550},
    {nombre: "Luigi Mansion 3", precio: 650},
    {nombre: "Mario Tenis Rush", precio: 400},
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: Q.${producto.precio}`);

carrito.forEach(producto => console.log(`${producto.nombre} - Precio: Q.${producto.precio}`));

console.log(nuevoArreglo);