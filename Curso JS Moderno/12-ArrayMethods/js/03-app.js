pestaña = "App 3";
console.log(pestaña);

let total = 0; 

canasta.forEach( producto => total += producto.precio);
console.log(total);

let result = canasta.reduce( (total, producto) => total + producto.precio );
console.log(result);