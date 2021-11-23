pestaña = "App 7";
console.log(pestaña);


//Eliminar el ultimo arreglo del carrito
carrito.pop();
console.table(carrito);

//Eliminar el inicio del arreglo
carrito.shift();
console.table(carrito);

carrito.push(producto3);
carrito.push(producto2);
console.table(carrito);

//Eliminar por posicion (Posicion arreglo, cantidad de elemento a eliminar)
carrito.splice(1,1);
console.table(carrito);

