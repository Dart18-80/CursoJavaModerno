pestaña = "App 9";
console.log(pestaña);

const canasta = 
[
    {nombre: "Super Mario Bros", precio: 500},
    {nombre: "Mario Kart 8", precio: 600},
    {nombre: "Metroid", precio: 550},
    {nombre: "Luigi Mansion 3", precio: 650},
    {nombre: "Mario Tenis Rush", precio: 400},
]

for(let i = 0 ; i < canasta.length; i++)
{
    console.log(`${canasta[i].nombre} - Tiene un precio de: Q.${canasta[i].precio}.00`);
}

canasta.forEach(function(productos) {
    console.log(`${productos.nombre} - Tiene un precio de: Q.${productos.precio}.00`);
})
