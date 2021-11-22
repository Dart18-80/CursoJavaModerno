numero = "App 8";
console.log(numero);

// Declarar una clase para que no pueda ser modificado
"use strict";

const juegos = 
{
    nombrev: "Super Mario Bros",
    preciov: 500,
    status: true,
}

//Congelar los objetos, no se puede agregar y tampoco eliminar propiedades
Object.freeze(juegos);

juegos.status = false;
juegos.imagen = "Imagen.jpg";

console.log(juegos);

console.log(Object.isFrozen(juegos));