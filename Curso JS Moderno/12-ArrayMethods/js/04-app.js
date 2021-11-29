pestaña = "App 4";
console.log(pestaña);

let res; 

res = canasta.filter( producto => producto.precio > 500);

console.log(res);

res = canasta.filter(producto => producto.precio <=  500);
console.log(res);

res = canasta.filter(producto => producto.nombre !== 'Metroid');
console.log(res);

res = canasta.filter(producto => producto.nombre === 'Luigi Mansion 3');
console.log(res);