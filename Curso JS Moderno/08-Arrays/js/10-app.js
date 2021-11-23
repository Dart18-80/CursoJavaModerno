pestaña = "App 10";
console.log(pestaña);

const nuevoArreglo = canasta.map(function(produc){
        return `${produc.nombre} - Tiene un precio de: Q.${produc.precio}.00`
})

const nuevoArreglo2 = canasta.forEach(function(produc){
    return `${produc.nombre} - Tiene un precio de: Q.${produc.precio}.00`
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);