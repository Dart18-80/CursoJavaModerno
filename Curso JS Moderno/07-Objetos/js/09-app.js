numero = "App 9";
console.log(numero);

const juego = 
{
    nombrev: "Super Mario Bros",
    preciov: 500,
    status: true,
}

//No se puede agregar ni eliminar propiedades pero si se pueden modificar las propiedades

Object.seal( juego);

juego.tienda = "Max";
delete juego.status;

console.log(juego);

console.log(Object.isSealed(juego));